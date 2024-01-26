'use client';
import { ProductCard } from './product-card';
import { useEffect, useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import isEqual from 'lodash/isEqual';
import { useSort } from '@/hooks/useSort';
import { TProductCard } from '@/content/types';

type ProductListProps = {
  initialProductList: TProductCard[];
};

export const ProductList = ({ initialProductList }: ProductListProps) => {
  const [products, setProducts] = useState<TProductCard[]>(initialProductList);
  const { tagFilters, priceFilters, hasFilters, filterProducts } = useFilter();
  const { sortOption, sortProducts } = useSort();

  useEffect(() => {
    let updatedProducts;

    if (hasFilters) {
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
  }, [tagFilters, priceFilters, sortOption, products]);

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
