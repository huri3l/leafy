import { ComponentType } from 'react';
import { KnowUs } from '../KnowUs';
import { ProductCarousel } from '../ProductCarousel';
import { Categories } from '../Categories';
import { AboutUs } from '../AboutUs';

type TSectionMap = {
  [key: string]: ComponentType<any>;
};

export const getSection = (name: string) => {
  return sectionMap[name] ?? undefined;
};

const sectionMap: TSectionMap = {
  know_us: KnowUs,
  product_carousel: ProductCarousel,
  category: Categories,
  about_us: AboutUs,
};
