import { TProduct } from '../produto/types';

export async function getProductOld(slug: string): Promise<TProduct> {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    console.error(res);
    throw new Error('Erro ao obter os dados da API');
  }

  return res.json();
}
