import { RichTextField } from '@prismicio/client';
import { TPrice, TRichText } from '../common';

export type TProductPagePrice = {
  current: TPrice;
  old?: TPrice;
  details?: TRichText;
  discount?: string;
};

export type TProductPage = {
  images: {
    url: string;
    alt: string;
  }[];
  name: string;
  price: TProductPagePrice;
  description: TRichText;
};
