import { TFormattedProductCard } from '@/sdk/home/types';
import { TFilterOption } from '@/sdk/produto/types';
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

  const getFilterOptionsFromProducts = (
    products: TFormattedProductCard[],
    isCategoryPage = false,
  ): TFilterOption[] => {
    const options: TFilterOption[] = [];

    products.forEach(({ tags }) => {
      tags?.forEach((tag) => {
        const [title, value] = tag.split('-');

        const existingOption = options.find((option) => option.title === title);

        if (existingOption) {
          if (!existingOption.possibilities.includes(value)) {
            existingOption.possibilities.push(value);
          }
        } else {
          options.push({ title, possibilities: [value] });
        }
      });
    });

    if (isCategoryPage) {
      return options.filter((option) => option.title !== 'Categorias');
    }

    return options;
  };

  const filterProducts = (products: TFormattedProductCard[]) => {
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

    const productsTagFiltered = products.filter((product) => {
      const matchTagFiltersCondition = tagFilters.some((filter) => {
        return product.tags?.some((tag) => tag.includes(filter));
      });

      const matchPriceFiltersCondition = _filterProductByPrice(product.price.raw);

      return matchTagFiltersCondition && matchPriceFiltersCondition;
    });

    return productsTagFiltered;
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
    getFilterOptionsFromProducts,
  };
};
