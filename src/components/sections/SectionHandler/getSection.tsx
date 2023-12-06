import { ComponentType } from 'react';
import { KnowUs } from '../KnowUs';
import { ProductCarousel } from '../ProductCarousel';
import { CategoriesDisplay } from '../CategoriesDisplay';
import { AboutUs } from '../AboutUs';
import { Gift } from '../Gift';

type TSectionMap = {
  [key: string]: ComponentType<any>;
};

export const getSection = (name: string) => {
  return sectionMap[name] ?? undefined;
};

const sectionMap: TSectionMap = {
  know_us: KnowUs,
  product_carousel: ProductCarousel,
  categories_display: CategoriesDisplay,
  about_us: AboutUs,
  gift: Gift,
};
