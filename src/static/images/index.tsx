import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo.webp";

import HeroSlider1 from "./Mariachi2000depuebla.jpg";
import NosostrosImg from "./Mariachipuebla.jpg";
import HeroSlider3 from "./Mariachisenpuebla.jpg";

import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";
import InfiniteCumple from "./cumpleaños.jpeg";
import InfiniteSerenata from "./serenatas.jpeg";

import ServiciosImg from "./graduacion.jpeg";

import ImageHistoria1 from "./imgHistoria1.png";
import ImageHistoria2 from "./imgHistoria2.png";
import ImageHistoria3 from "./imgHistoria3.png";
import Mariotell from "./mariotell.png";

export const images = {
  preview: PreviewPng,
  heroImg: HeroImg,
  logo: Logo,
};

export type ImageProps = {
  srcLocal?: keyof typeof images;
  src?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
  alt,
  srcLocal,
  height,
  width,
  src,
  loading,
  ...rest
}) => {
  /**
   * If srcLocal or src is not provided throw an error
   */
  if (!srcLocal && !src) {
    throw new Error("srcLocal or src is required");
  }

  /**
   * this component should be able to use local images or images from external sources
   */
  const image = srcLocal ? images[srcLocal] : { src, width, height };

  return (
    <img
      src={image.src}
      alt={alt}
      width={width ? width : image.width}
      height={height ? height : image.height}
      loading={loading}
      {...rest}
    />
  );
};

// default export of the images
export {
  PreviewPng,
  HeroSlider1,
  NosostrosImg,
  HeroSlider3,
  InfiniteImg1,
  InfiniteImg2,
  InfiniteCumple,
  InfiniteSerenata,
  ServiciosImg,
  ImageHistoria1,
  ImageHistoria2,
  ImageHistoria3,
  Mariotell,
};
