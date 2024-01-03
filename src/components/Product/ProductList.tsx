'use client';
import { TFormattedProductCard } from '@/sdk/home/types';
import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import isEqual from 'lodash/isEqual';
import { useSort } from '@/hooks/useSort';

interface ProductListProps {
  initialProductList: TFormattedProductCard[];
}

export const ProductList = ({ initialProductList }: ProductListProps) => {
  const [products, setProducts] = useState<TFormattedProductCard[]>(initialProductList);
  const { tagFilters, filterProducts } = useFilter();
  const { sortOption, sortProducts } = useSort();

  useEffect(() => {
    let updatedProducts;

    if (tagFilters.length > 0) {
      updatedProducts = filterProducts(initialProductList);
    } else {
      updatedProducts = [...initialProductList];
    }

    if (sortOption) {
      updatedProducts = sortProducts(updatedProducts);
    }

    if (!isEqual(products, updatedProducts)) {
      setProducts(updatedProducts);
    }
  }, [tagFilters, sortOption, products]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product, idx) => (
        <ProductCard
          key={product.name + idx}
          {...product}
          className="flex-[0_0_47%]"
          priority={idx === 0}
        />
      ))}
    </div>
  );
};
