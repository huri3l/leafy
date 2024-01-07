import { RichTextField } from '@prismicio/client';
import { TImage, TPrice, TRichText } from '../types';

export type TProductPagePrice = {
  current: TPrice;
  old?: TPrice;
  details?: TRichText;
  discount?: string;
};

export type TProductPage = {
  images: TImage[];
  name: string;
  price: TProductPagePrice;
  description: TRichText;
};
