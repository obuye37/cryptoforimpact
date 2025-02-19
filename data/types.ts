export type Slide = {
    id: number;
    title: string;
    subTitle: string;
    imgUri: string;
    uri: string;
    alt: string;
  };
  
  export type CarouselProps = {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: Slide[];
    carouselNavBtn:boolean;
    carouselIdicator:boolean;
  };