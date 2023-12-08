export async function getProduct(slug: string) {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Erro ao obter os dados da API');
  }

  return res.json();
}
