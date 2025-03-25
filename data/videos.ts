import axios, {AxiosError} from 'axios'


// export interface VideoProps {
//   id: {
//     videoId: string;
//   };
//   snippet: {
//     title: string;
//     description: string;
//     thumbnails: {
//       medium: {
//         url: string;
//         width: number;
//         height: number;
//       };
//     };
//   };
// }

export interface VideoProps {
  videoId: string;
  title: string;
  description: string;
  thumbnails: {url:string}
}


export const GetVideos =  async(): Promise<VideoProps[]>  => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? "" 
    const CHANNEL_ID = "UCIn1plPM3tI0BuYsWHtSK2Q"
    const maxResults = 50;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&order=date&type=video&key=${API_KEY}`;
    let videos  
    try {
          const response = await axios.get(url)
            videos = response.data?.items?.map( ( item:any ) => {
                                                    return {
                                                      videoId: item.id.videoId,
                                                      title: item.snippet.title,
                                                      description: item.snippet.description,
                                                      thumbnails: item.snippet.thumbnails.medium
                                                    }
                                                  })
        } catch (error) {
            if(error instanceof AxiosError) {
              console.error("Error fetching Channel ID:", error.response?.data || error.message);
            }else {
                  console.error("Unknown error:", error);
                }
        }
        
        
    
    return videos

}





