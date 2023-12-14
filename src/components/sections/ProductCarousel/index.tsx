import { ProductCard } from '@/components/Product/ProductCard';
import { Carousel } from '@/components/commons/Carousel';
import { TFormattedProduct } from '@/sdk/home/types';
import { EmblaOptionsType } from 'embla-carousel-react';

export type TProductCarouselProps = {
  data: TFormattedProduct[];
};

export const ProductCarousel = ({ data: products }: TProductCarouselProps) => {
  const carouselOptions: EmblaOptionsType = { loop: true, align: 'start' };

  return (
    <section className="sandbox__carousel">
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel {...carouselOptions} dots={{ visible: true }}>
          {products.map((product, idx) => (
            <ProductCard key={product.name + idx} {...product} className="flex-[0_0_50%] mr-4" />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
