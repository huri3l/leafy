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

type TSectionMap = {
  [key: string]: ComponentType<any>;
};

export const getSection = (name: string) => {
  return sectionMap[name] ?? undefined;
};

const sectionMap: TSectionMap = {
  know_us: KnowUs,
  product_carousel: DProductCarousel,
};
