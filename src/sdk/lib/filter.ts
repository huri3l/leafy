import { ProductCarouselSliceListItem } from '../../../prismicio-types';
import { TFilterOption } from '../produto/types';

export const getFilterOptionsFromProducts = (
  products: ProductCarouselSliceListItem[],
  isCategoryPage = false,
): TFilterOption[] => {
  const options: TFilterOption[] = [];

  products.forEach(({ tags: strTags }) => {
    const tags = strTags?.split(',');

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
