export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const unformatPrice = (price: string) => {
  return Number(price.split('R$')[1].trim().replace(',', '.'));
};
