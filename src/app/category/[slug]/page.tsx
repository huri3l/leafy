import { Filter } from '@/components/commons/Product/Filter';
import { ProductList } from '@/components/commons/Product/ProductList';
import { Sort } from '@/components/commons/Product/Sort';
import { getCategory } from '@/content/category';
import { PrismicRichText } from '@prismicio/react';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
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
        <div className="flex w-fit px-6 mx-auto gap-8 border-b-2 border-b-lf-gray-200">
          <Filter options={category.filters} hasPriceFilter={true} />
          <Sort />
        </div>
      </div>
      <ProductList initialProductList={category.products} />
    </div>
  );
}
