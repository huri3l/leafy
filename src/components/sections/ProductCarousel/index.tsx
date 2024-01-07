import { ProductCard } from '@/components/commons/Product/ProductCard';
import { Carousel } from '@/components/commons/Carousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { TProductSection } from '@/content/home/types';

type ProductCarouselProps = {
  data: TProductSection;
};

export const ProductCarousel = ({ data: products }: ProductCarouselProps) => {
  const carouselOptions: EmblaOptionsType = { loop: true, align: 'start' };

  return (
    <section className="sandbox__carousel overflow-hidden">
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
