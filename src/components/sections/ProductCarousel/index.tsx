import { ProductCard } from '@/components/commons/Product/ProductCard';
import { TProductSection } from '@/content/home/types';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';

type ProductCarouselProps = {
  data: TProductSection;
};

export const ProductCarousel = ({ data: products }: ProductCarouselProps) => {
  return (
    <section className="sandbox__carousel overflow-hidden">
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel opts={{ loop: true, align: 'start' }}>
          <CarouselContent>
            {products.map((product, idx) => (
              <CarouselItem key={product.name + idx} className="basis-1/2">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
};
