import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { KnowUs } from '../KnowUs';

const DProductCarousel = dynamic(
  () => import('../ProductCarousel').then((mod) => mod.ProductCarousel),
  {
    ssr: false,
    loading: () => <p>Carregando...</p>,
  },
);

const DCategoriesDisplay = dynamic(
  () => import('../CategoriesDisplay').then((mod) => mod.CategoriesDisplay),
  {
    ssr: false,
    loading: () => <p>Carregando...</p>,
  },
);

const DAboutUs = dynamic(() => import('../AboutUs').then((mod) => mod.AboutUs), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
});

const DGift = dynamic(() => import('../Gift').then((mod) => mod.Gift), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
});

type TSectionMap = {
  [key: string]: ComponentType<any>;
};

export const getSection = (name: string) => {
  return sectionMap[name] ?? undefined;
};

const sectionMap: TSectionMap = {
  know_us: KnowUs,
  product_carousel: DProductCarousel,
  categories_display: DCategoriesDisplay,
  about_us: DAboutUs,
  gift: DGift,
};
