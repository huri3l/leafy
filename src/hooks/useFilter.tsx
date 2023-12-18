import { TFormattedProductCard } from '@/sdk/home/types';
import { TFilterOption } from '@/sdk/produto/types';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(Array.from(useSearchParams().entries()));
  const filters = searchParams.get('filter')?.split('&') ?? [];

  const search = searchParams.toString();
  const query = `${'?'.repeat(search.length && 1)}${search}`;

  router.push(`${pathname}${query}`);

  const insert = (newFilter: string) => {
    const filterIndex = filters?.indexOf(newFilter);

    if (filterIndex !== -1) return;

    filters?.push(newFilter);
    searchParams.set('filter', filters.join('&'));

    const search = searchParams.toString();
    const query = `${'?'.repeat(search.length && 1)}${search}`;
    router.push(`${pathname}${query}`);
  };

  const remove = (filterToRemove: string) => {
    if (filters) {
      if (filters?.length === 1) {
        searchParams.delete('filter');
      } else {
        searchParams.set('filter', filters.filter((filter) => filter !== filterToRemove).join('&'));
      }
    }

    const search = searchParams.toString();
    const query = `${'?'.repeat(search.length && 1)}${search}`;
    router.push(`${pathname}${query}`);
  };

  const removeAll = () => {
    searchParams.delete('filter');

    const search = searchParams.toString();
    const query = `${'?'.repeat(search.length && 1)}${search}`;
    router.push(`${pathname}${query}`);
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

  return { filters, insert, remove, removeAll, getFilterOptionsFromProducts };
};
