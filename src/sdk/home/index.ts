import { TFormattedHomeItem, THomeItem } from './types';

export async function getHomeSections() {
  const res = await fetch('http://localhost:3000/api', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Erro ao obter os dados da API');
  }

  const data = await res.json();

  const sections: TFormattedHomeItem[] = data.home.map((section: THomeItem) => {
    const _formattedQty = (qty: number) => {
      const qtyLength = qty.toString().length;
      if (qtyLength >= 3) {
        const qtyFirstNumber = qty.toString()[0];
        return `${qtyFirstNumber}${'0'.repeat(qtyLength - 1)}+`;
      }

      return qty.toString();
    };

    if (section.name === 'know_us') {
      return {
        ...section,
        data: {
          ...section.data,
          statistics: section.data.statistics.map(({ qty, ...statistic }) => {
            return {
              ...statistic,
              qty: _formattedQty(qty),
            };
          }),
        },
      };
    }

    if (section.name === 'product_carousel') {
      return {
        ...section,
        data: section.data.map(({ slug, price, ...product }) => {
          return {
            link: `/p/${slug}`,
            price: price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
            ...product,
          };
        }),
      };
    }

    return section;
  });

  return sections;
}
