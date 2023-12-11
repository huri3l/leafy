import { ProductMain } from '@/components/Product/ProductMain';
import { Button } from '@/components/commons/Button';
import { RichText } from '@/components/commons/RichText';
import { getProduct } from '@/sdk/produto';
import { ShoppingBasket } from 'lucide-react';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  console.log(product.description);

  return (
    <div>
      <Image
        src={product.images[0].url}
        alt={product.images[0].alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
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
