import { TProductCard } from '@/content/types';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(Array.from(useSearchParams().entries()));
  const tagFilters = searchParams.get('filter')?.split('&') ?? [];
  const priceFilters = {
    from: searchParams.get('from') ?? undefined,
    to: searchParams.get('to') ?? undefined,
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
    searchParams.set('filter', tagFilters.join('&'));

    updateURL();
  };

  const insertPriceFilter = (method: 'from' | 'to', value: number) => {
    if (method === 'from') {
      searchParams.set('from', String(value));
    }

    if (method === 'to') {
      searchParams.set('to', String(value));
    }

    updateURL();
  };

  const removeTagFilter = (filterToRemove: string) => {
    if (tagFilters) {
      if (tagFilters?.length === 1) {
        searchParams.delete('filter');
      } else {
        searchParams.set(
          'filter',
          tagFilters.filter((filter) => filter !== filterToRemove).join('&'),
        );
      }
    }

    updateURL();
  };

  const removePriceFilter = (method: 'from' | 'to') => {
    if (method === 'from') {
      searchParams.delete('from');
    }

    if (method === 'to') {
      searchParams.delete('to');
    }

    updateURL();
  };

  const removeAllFilters = () => {
    searchParams.delete('filter');
    searchParams.delete('from');
    searchParams.delete('to');

    updateURL();
  };

  const filterProducts = (products: TProductCard[]) => {
    const _filterProductByPrice = (price: number) => {
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

      const matchPriceFiltersCondition = _filterProductByPrice(product.price.raw);

      return matchTagFiltersCondition && matchPriceFiltersCondition;
    });

    return productsFiltered;
  };

  return {
    tagFilters,
    priceFilters,
    insertTagFilter,
    insertPriceFilter,
    removeTagFilter,
    removePriceFilter,
    removeAllFilters,
    filterProducts,
  };
};
