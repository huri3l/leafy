import { TFormattedProductCard } from '../home/types';
import { TFilterOption, TProduct } from './types';

export async function getProduct(slug: string): Promise<TProduct> {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    console.error(res);
    throw new Error('Erro ao obter os dados da API');
  }

  return res.json();
}

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
