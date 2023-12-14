import { Filter } from '@/components/Product/Filter';
import { ProductCard } from '@/components/Product/ProductCard';
import { Sort } from '@/components/Product/Sort';
import { getCategory } from '@/sdk/categoria';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const category = await getCategory(params.slug);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center space-y-4 p-4">
        <strong className="text-xl">{category.main.title}</strong>
        <p className="text-lg">{category.main.description}</p>
      </div>
      <div className="space-y-4">
        <strong className="text-xl">{category.name}</strong>
        <div className="flex w-fit px-6 mx-auto gap-8 border-b-2 border-b-lf-gray-200">
          {/* <Filter options={} />
          <Sort /> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {category.products.map((product, idx) => (
          <ProductCard key={product.name + idx} {...product} className="flex-[0_0_47%]" />
        ))}
      </div>
    </div>
  );
}
