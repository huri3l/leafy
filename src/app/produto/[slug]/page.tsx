import { ProductImages } from '@/components/Product/ProductImages';
import { ProductMain } from '@/components/Product/ProductMain';
import { Button } from '@/components/commons/Button';
import { getProduct } from '@/sdk/content/product';
import { PrismicRichText } from '@prismicio/react';
import { ShoppingBasket } from 'lucide-react';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  console.log('product', product);

  return (
    <div>
      <ProductImages images={product.images} />

      <div className="p-4">
        <ProductMain name={product.name} price={product.price} />
        <hr className="w-1/2 h-0.5 bg-lf-gray-200 mx-auto my-5" />

        <PrismicRichText
          field={product.description}
          components={{
            heading6: ({ children }) => <h6 className="font-medium text-xl mb-2">{children}</h6>,
            paragraph: ({ children }) => <p className="mt-3">{children}</p>,
            listItem: ({ children }) => <li className="ml-1 list-disc list-inside">{children}</li>,
          }}
        />

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
