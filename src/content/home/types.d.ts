import { TRichText } from '@prismicio/client';
import { TImage, TPrice, TProductCard } from '../types';

export type TAboutUsSection = {
  icon: string;
  title: string;
  description: string;
};

export type TKnowUsSection = {
  title: string;
  image: TImage;
  statistics: TRichText[];
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

export type TProductSection = TProductCard[];

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
      data: TProductSection;
    }
  | {
      name: 'about_us';
      title?: string;
      description?: string;
      data: TAboutUsSection[];
    };
