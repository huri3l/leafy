import { EmblaOptionsType } from 'embla-carousel-react';
import { Carousel } from '../Carousel';
import { TImage } from '@/content/types';
import Image from 'next/image';

type ProductImagesProps = {
  images: TImage[];
};

export const ProductImages = ({ images }: ProductImagesProps) => {
  const carouselOptions: EmblaOptionsType = { loop: true, align: 'start' };

  return (
    <div className="sandbox__carousel overflow-hidden">
      <div>
        {images.length > 1 ? (
          <Carousel
            {...carouselOptions}
            dots={{
              visible: true,
              style: {
                container: 'absolute bottom-2 right-4',
                dot: 'drop-shadow-xl-darker',
              },
            }}
            className="flex relative w-full"
          >
            {images.map((image, idx) => (
              <Image
                key={image.url + idx}
                src={image.url}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full flex-[1_0_100%] h-auto rounded-b-3xl"
              />
            ))}
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
