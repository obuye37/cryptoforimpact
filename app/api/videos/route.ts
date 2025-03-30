// app/api/videos/route.ts
import { Redis } from '@upstash/redis';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Initialize Upstash Redis using your REST API URL and token
const redis = new Redis({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL!,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN!,
});

// Define the Video interface based on the data you expect from YouTube
export interface VideoProps {
  videoId: string;
  title: string;
  description: string;
  thumbnail: {url:string}
}


// Your YouTube API configuration
const API_KEY = process.env.NEXT_PUBLIC_YT_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YT_CHANNEL_ID;

// This function loops through YouTube API pages until all videos are fetched
async function fetchAllVideos(): Promise<VideoProps[]> {
  let videos: VideoProps[] = [];
  let nextPageToken: string | undefined = undefined;
  
  do {
    // Build the URL dynamically
    const url:string = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}${nextPageToken ? '&pageToken=${nextPageToken': ''}&fields=nextPageToken,items(id(videoId),snippet(title,description,thumbnails(medium)))`;

    const response = await axios.get(url);

    // Map each item to our Video interface
    const newVideos: VideoProps[] = response.data.items.map((item: any) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    videos.push(...newVideos);
    nextPageToken = response.data.nextPageToken;
  } while (nextPageToken);
  return videos;
}

export async function GET(request: Request) {
  // Support pagination via query parameters (e.g., ?page=1&limit=10)
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');
  const page = pageParam ? parseInt(pageParam) : 1;
  const limit = limitParam ? parseInt(limitParam) : 10;

  try {
    // Attempt to retrieve the full list of videos from Redis cache
    let allVideos: VideoProps[] | null = await redis.get<VideoProps[]>("youtubeVideos");

    if (!allVideos) {
      console.log("⏳ Fetching all videos from YouTube API...");
      // Fetch all videos using the helper function
      allVideos = await fetchAllVideos();
      // Store the complete list in Redis as a JSON string with a 1-hour expiry
      await redis.set("youtubeVideos", JSON.stringify(allVideos), { ex: 1800 });
    } else {
      console.log("Serving videos from cache");
      // If using generics, the Redis client may auto-parse your JSON.
      // If it doesn't, you might need to parse: allVideos = JSON.parse(allVideos);
    }

    // Paginate the results: calculate start index and slice the array
    const start = (page - 1) * limit;
    const paginatedVideos = allVideos.slice(start, start + limit);
    const totalPages = Math.ceil(allVideos.length / limit);

    return NextResponse.json({ 
      page,
      limit,
      totalVideos: allVideos.length,
      totalPages,
      videos: paginatedVideos 
    });
  } catch (error: any) {
    console.error("Error fetching videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}
