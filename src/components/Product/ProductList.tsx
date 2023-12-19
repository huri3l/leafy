'use client';
import { TFormattedProductCard } from '@/sdk/home/types';
import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import isEqual from 'lodash/isEqual';

interface ProductListProps {
  rawProductList: TFormattedProductCard[];
}

export const ProductList = ({ rawProductList }: ProductListProps) => {
  const [products, setProducts] = useState<TFormattedProductCard[]>(rawProductList);
  const { tagFilters, filterProducts } = useFilter();

  useEffect(() => {
    const filteredProducts = filterProducts(rawProductList);

    if (!isEqual(products, filteredProducts)) {
      setProducts(filteredProducts);
    }
  }, [tagFilters]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product, idx) => (
        <ProductCard key={product.name + idx} {...product} className="flex-[0_0_47%]" />
      ))}
    </div>
  );
};
