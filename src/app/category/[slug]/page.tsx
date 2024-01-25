import { Filter } from '@/components/commons/filter';
import { ProductList } from '@/components/commons/product-list';
import { Sort } from '@/components/commons/sort';
import { getCategory } from '@/content/category';
import { getMetadata } from '@/content/metadata';
import { PrismicRichText } from '@prismicio/react';
import { Metadata } from 'next';

type CategoryPageProps = {
  params: { slug: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.slug);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-4 p-4">
        <PrismicRichText
          field={category.details}
          components={{
            strong: ({ children }) => <strong className="text-xl">{children}</strong>,
            paragraph: ({ children }) => <p className="text-lg">{children}</p>,
          }}
        />
      </div>
      <div className="space-y-4">
        <strong className="text-xl">{category.name}</strong>
        <div className="flex w-fit px-6 pb-1 mx-auto gap-8 border-b-2 border-b-lf-gray-200">
          <Filter options={category.filters} hasPriceFilter={true} />
          <Sort />
        </div>
      </div>
      <ProductList initialProductList={category.products} />
    </div>
  );
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  return await getMetadata('category', params.slug);
}
