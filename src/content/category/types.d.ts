import { TFilterOption, TProductCard, TRichText } from '../types';

export type TCategoryPage = {
  name: string;
  details: TRichText;
  products: TProductCard[];
  filters: TFilterOption[];
};
