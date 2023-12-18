import { TFormattedProductCard } from '../home/types';
import { TFilterOption } from '../produto/types';

export const getFilterOptionsFromProducts = (
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

export const filterProducts = (products: TFormattedProductCard[], filters: string[]) => {
  return products.filter((product) => {
    const matchFiltersCondition = filters.some((filter) => {
      return product.tags?.some((tag) => tag.includes(filter));
    });

    return matchFiltersCondition;
  });
};
