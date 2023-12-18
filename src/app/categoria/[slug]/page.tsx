import { Filter } from '@/components/Product/Filter';
import { ProductList } from '@/components/Product/ProductList';
import { Sort } from '@/components/Product/Sort';
import { useFilter } from '@/hooks/useFilter';
import { getCategory } from '@/sdk/categoria';
import { getFilterOptionsFromProducts } from '@/sdk/lib/filter';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategory(params.slug);
  const filterOptions = getFilterOptionsFromProducts(category.products, true);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-4 p-4">
        <strong className="text-xl">{category.main.title}</strong>
        <p className="text-lg">{category.main.description}</p>
      </div>
      <div className="space-y-4">
        <strong className="text-xl">{category.name}</strong>
        <div className="flex w-fit px-6 mx-auto gap-8 border-b-2 border-b-lf-gray-200">
          <Filter options={filterOptions} hasPriceFilter={true} />
          <Sort />
        </div>
      </div>
      <ProductList rawProductList={category.products} />
    </div>
  );
}
