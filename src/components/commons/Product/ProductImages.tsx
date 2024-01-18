import { TImage } from '@/content/types';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';

type ProductImagesProps = {
  images: TImage[];
};

export const ProductImages = ({ images }: ProductImagesProps) => {
  return (
    <div className="sandbox__carousel overflow-hidden">
      <div>
        {images.length > 1 ? (
          <Carousel opts={{ loop: true, align: 'start' }} className="flex relative w-full">
            <CarouselContent>
              {images.map((image, idx) => (
                <CarouselItem key={image.url + idx} className="basis-full w-full">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={0}
                    height={0}
                    unoptimized
                    sizes="100vw"
                    className="w-full flex-grow basis-full h-auto rounded-b-3xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="absolute bottom-2 right-4 [&>button]:drop-shadow-xl-darker" />
          </Carousel>
        ) : (
          <Image
            src={images[0].url}
            alt={images[0].alt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full flex-[1_0_100%] h-auto rounded-b-3xl"
          />
        )}

        <hr className="h-1 w-10/12 mx-auto bg-gradient-to-r from-transparent via-lf-green-alt to-transparent" />
      </div>
    </div>
  );
};
