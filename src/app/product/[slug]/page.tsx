import { ProductImages } from '@/components/commons/Product/ProductImages';
import { ProductMain } from '@/components/commons/Product/ProductMain';
import { getProduct } from '@/content/product';
import { PrismicRichText } from '@prismicio/react';
import { ShoppingBasket } from 'lucide-react';
import { getMetadata } from '@/content/metadata';
import { Metadata } from 'next';
import { dict } from '@/content/dictionary';
import { Button } from '@/components/ui/button';

type ProductPageProps = {
  params: { slug: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  return (
    <div>
      <ProductImages images={product.images} />

      <div className="p-4">
        <ProductMain name={product.name} price={product.price} />
        <hr className="w-1/2 h-0.5 bg-lf-gray-200 mx-auto my-5" />

        <PrismicRichText
          field={product.description}
          components={{
            heading6: ({ children }) => (
              <strong className="font-medium text-xl mb-2">{children}</strong>
            ),
            paragraph: ({ children }) => <p className="mt-3">{children}</p>,
            listItem: ({ children }) => <li className="ml-1 list-disc list-inside">{children}</li>,
          }}
        />

        <div className="fixed bottom-4 right-4 shadow-lg">
          <Button variant="success" className="shadow-md">
            <ShoppingBasket className="w-5 h-5 stroke-2" />
            <strong>{dict('general.buy')}</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  return await getMetadata('product', params.slug);
}
