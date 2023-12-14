import { TCategory, TFormattedCategory } from './types';

export async function getCategory(slug: string): Promise<TFormattedCategory> {
  const res = await fetch(`http://localhost:3000/api/categoria/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    console.error(res);
    throw new Error('Erro ao obter os dados da API');
  }

  const data: TCategory = await res.json();

  return {
    ...data,
    products: data.products.map(({ slug, price, ...product }) => {
      return {
        ...product,
        slug,
        link: `/produto/${slug}`,
        price: price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      };
    }),
  };
}
