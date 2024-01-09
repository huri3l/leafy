import { TProductCard } from '@/content/types';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export type SortOptions = 'ascending' | 'descending' | 'cheap' | 'expensive';

export const useSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(Array.from(useSearchParams().entries()));
  const sortOption = (searchParams.get('sort') as SortOptions) ?? undefined;

  const updateURL = () => {
    const search = searchParams.toString();
    const query = `${'?'.repeat(search.length && 1)}${search}`;

    router.push(`${pathname}${query}`);
  };

  const insertSortOption = (option: SortOptions) => {
    searchParams.set('sort', option);

    updateURL();
  };

  const removeSortOption = () => {
    searchParams.delete('sort');

    updateURL();
  };

  const sortProducts = (products: TProductCard[]) => {
    const _sort = (a: TProductCard, b: TProductCard) => {
      if (sortOption === 'ascending') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'descending') {
        return b.name.localeCompare(a.name);
      } else if (sortOption === 'cheap') {
        return a.price.raw - b.price.raw;
      } else if (sortOption === 'expensive') {
        return b.price.raw - a.price.raw;
      }

      return 0;
    };

    return products.sort(_sort);
  };

  return {
    sortOption,
    insertSortOption,
    removeSortOption,
    sortProducts,
  };
};
