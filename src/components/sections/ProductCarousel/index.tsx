import { Button } from '@/components/commons/Button';
import { Carousel } from '@/components/commons/Carousel';
import { TFormattedProduct } from '@/sdk/home/types';
import { EmblaOptionsType } from 'embla-carousel-react';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export type TProductCarouselProps = {
  data: TFormattedProduct[];
};

export const ProductCarousel = ({ data: products }: TProductCarouselProps) => {
  const carouselOptions: EmblaOptionsType = { loop: true, align: 'start' };

  return (
    <section className="sandbox__carousel">
      <div className="lg:w-3/4 mx-auto my-2">
        <Carousel {...carouselOptions} dots>
          {products.map(({ name, link, price, image }, idx) => (
            <div key={name + idx} className="flex-[0_0_50%] mr-4">
              <div className="flex flex-col rounded-lg bg-white w-fit">
                <div className="relative w-48 h-48">
                  <Link href={link}>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      unoptimized
                      className="rounded-t-lg"
                    />
                  </Link>
                </div>
                <div className="flex flex-col p-2.5">
                  <span>{name}</span>
                  <span className="text-lf-green-alt">{price}</span>
                  <Button
                    size="sm"
                    color="success"
                    icon={{
                      render: ShoppingBag,
                      position: 'left',
                    }}
                    className="mt-2 w-fit mx-auto"
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
