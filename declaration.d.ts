declare module 'react-slick' {
  import { Component } from 'react';

  export interface ResponsiveSetting {
    breakpoint: number;
    settings: Partial<Settings>;
  }

  export interface Settings {
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    initialSlide?: number;
    arrows?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    responsive?: ResponsiveSetting[];
    afterChange?: (currentSlide?: number) => void;
    asNavFor?: any;
    [key: string]: any;
  }

  export default class Slider extends Component<Settings> {
    slickNext(): void;
    slickPrev(): void; 
    slickGoTo(slide: number, dontAnimate?: boolean): void; 
  }
}