import { TProductCard } from '@/content/types';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const __from = 'from';
export const __to = 'to';
export const __filter = 'filter';

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(Array.from(useSearchParams().entries()));
  const tagFilters = searchParams.get(__filter)?.split('&').filter(Boolean) ?? [];
  const priceFilters = {
    from: searchParams.get(__from) ?? undefined,
    to: searchParams.get(__to) ?? undefined,
  };

  const updateURL = () => {
    const search = searchParams.toString();
    const query = `${'?'.repeat(search.length && 1)}${search}`;

    router.push(`${pathname}${query}`);
  };

  const insertTagFilter = (newFilter: string) => {
    const filterIndex = tagFilters?.indexOf(newFilter);

    if (filterIndex !== -1) return;

    tagFilters?.push(newFilter);
    searchParams.set(__filter, tagFilters.join('&'));

    updateURL();
  };

  const insertPriceFilter = (method: typeof __from | typeof __to, value: number) => {
    if (method === __from) {
      searchParams.set(__from, String(value));
    }

    if (method === __to) {
      searchParams.set(__to, String(value));
    }

    updateURL();
  };

  const removeTagFilter = (filterToRemove: string) => {
    if (tagFilters) {
      if (tagFilters?.length === 1) {
        searchParams.delete(__filter);
      } else {
        searchParams.set(
          __filter,
          tagFilters.filter((filter) => filter !== filterToRemove).join('&'),
        );
      }
    }

    updateURL();
  };

  const removePriceFilter = (method: typeof __from | typeof __to) => {
    if (method === __from) {
      searchParams.delete(__from);
    }

    if (method === __to) {
      searchParams.delete(__to);
    }

    updateURL();
  };

  const removeAllFilters = () => {
    searchParams.delete(__filter);
    searchParams.delete(__from);
    searchParams.delete(__to);

    updateURL();
  };

  const filterProducts = (products: TProductCard[]) => {
    const __filterProductByPrice = (price: number) => {
      const from = Number(priceFilters.from);
      const to = Number(priceFilters.to);

      if (priceFilters.from && priceFilters.to) {
        return from <= price && to >= price;
      } else if (priceFilters.from) {
        return from <= price;
      } else if (priceFilters.to) {
        return to >= price;
      }

      return true;
    };

    const productsFiltered = products.filter((product) => {
      const matchTagFiltersCondition =
        tagFilters.length === 0 ||
        tagFilters.some((filter) => {
          return product.tags?.some((tag) => tag.includes(filter));
        });

      const matchPriceFiltersCondition = __filterProductByPrice(product.price.raw);

      return matchTagFiltersCondition && matchPriceFiltersCondition;
    });

    return productsFiltered;
  };

  const hasFilters = useMemo(() => {
    return !!(tagFilters.length > 0) || !!priceFilters.from || !!priceFilters.to;
  }, [tagFilters, priceFilters]);

  return {
    tagFilters,
    priceFilters,
    insertTagFilter,
    insertPriceFilter,
    removeTagFilter,
    removePriceFilter,
    removeAllFilters,
    filterProducts,
    hasFilters,
  };
};
