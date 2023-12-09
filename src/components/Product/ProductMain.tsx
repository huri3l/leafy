import { formatPrice } from '@/lib/utils';

interface ProductMainProps {
  name: string;
  price: {
    value: number;
    promotion?: {
      new_value: number;
      amount: number;
      condition: {
        type: string;
        no_fee_alternative: number;
      };
    };
    no_fee_alternative?: number;
  };
}

export const ProductMain = ({ name, price }: ProductMainProps) => {
  const oldPrice = price?.promotion && formatPrice(price.value);
  const currentPrice = price?.promotion
    ? formatPrice(price?.promotion?.new_value)
    : formatPrice(price.value);
  const discountAmount = price?.promotion && `-${price?.promotion?.amount * 100}%`;
  const details =
    price?.promotion?.condition.type === 'cash' &&
    `À vista ou em até ${price?.promotion?.condition.no_fee_alternative}x de ${formatPrice(
      price?.promotion?.new_value / price?.promotion?.condition.no_fee_alternative,
    )} sem juros`;

  return (
    <div className=" space-y-2">
      <h1 className="font-bold text-xl text-lf-gray-900">{name}</h1>
      <div>
        {price?.promotion && (
          <>
            <p className="line-through text-sm">{oldPrice}</p>
            <span className="inline-flex gap-2 items-center mb-0.5">
              <p className="text-lf-green-alt text-xl font-bold">{currentPrice}</p>
              <p className="text-sm px-1.5 py-0.5 bg-lf-green-200 rounded-md">{discountAmount}</p>
            </span>
            <p>
              À vista ou em até <strong>3x de R$ 14,33</strong> sem juros
            </p>
          </>
        )}
      </div>
    </div>
  );
};
