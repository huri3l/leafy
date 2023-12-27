import { ProductMain } from '@/components/Product/ProductMain';
import { Button } from '@/components/commons/Button';
import Carousel from '@/components/commons/Carousel';
import { RichText } from '@/components/commons/RichText';
import { getProduct } from '@/sdk/produto';
import { EmblaOptionsType } from 'embla-carousel-react';
import { ShoppingBasket } from 'lucide-react';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  const carouselOptions: EmblaOptionsType = { loop: true, align: 'start' };

  return (
    <div>
      <div className="sandbox__carousel overflow-hidden">
        <div>
          {product.images.length > 1 ? (
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
              {product.images.map((image, idx) => (
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
              src={product.images[0].url}
              alt={product.images[0].alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full flex-[1_0_100%] h-auto rounded-b-3xl"
            />
          )}

          <hr className="h-1 w-10/12 mx-auto bg-gradient-to-r from-transparent via-lf-green-alt to-transparent" />
        </div>
      </div>

      <div className="p-4">
        <ProductMain name={product.name} price={product.price} />

        <hr className="w-1/2 h-0.5 bg-lf-gray-200 mx-auto my-5" />

        <RichText content={product.description} />

        <div className="fixed bottom-4 right-4 shadow-lg">
          <Button
            icon={{
              render: ShoppingBasket,
              position: 'right',
            }}
            color="success"
          >
            <strong className="font-bold">Comprar</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}
