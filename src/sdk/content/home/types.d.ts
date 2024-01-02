import { RichTextField } from '@prismicio/client';

type TImage = {
  url: string;
  alt: string;
};

export type TAboutUsSection = {
  icon: string;
  title: string;
  description: string;
};

export type TKnowUsSection = {
  title: string;
  image: TImage;
  statistics: RichTextField[];
  search?: string;
};

export type TCategorySection = {
  categories: {
    title: string;
    description: string;
    link: string;
    image: TImage;
  }[];
  seeMore?: boolean;
};

export type TProductCarousel = {
  slug: string;
  name: string;
  price: {
    raw: number;
    formatted: string;
  };
  link: string;
  image: {
    url: string;
    alt: string;
  };
}[];

export type THomeSection =
  | {
      name: 'know_us';
      title?: string;
      description?: string;
      data: TKnowUsSection;
    }
  | {
      name: 'category';
      title?: string;
      description?: string;
      data: TCategorySection;
    }
  | {
      name: 'product_carousel';
      title?: string;
      description?: string;
      data: TProductCarousel;
    }
  | {
      name: 'about_us';
      title?: string;
      description?: string;
      data: TAboutUsSection[];
    };
