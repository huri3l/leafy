import { TFilterOption } from '@/sdk/produto/types';
import { TRichText } from '../common';

export type TCategoryPage = {
  name: string;
  details: TRichText;
  products: {
    tags?: string[];
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
  filters: TFilterOption[];
};
