import { TProductPagePrice } from '@/content/product/types';
import { PrismicRichText } from '@prismicio/react';

type ProductMainProps = {
  name: string;
  price: TProductPagePrice;
};

export const ProductMain = ({ name, price }: ProductMainProps) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-xl text-lf-gray-900">{name}</h1>
      <div>
        {price.old && <p className="line-through text-sm">{price.old.formatted}</p>}
        <span className="inline-flex gap-2 items-center mb-0.5">
          <p className="text-lf-green-alt text-xl font-bold">{price.current.formatted}</p>
          {price.discount && (
            <p className="text-sm px-1.5 py-0.5 bg-lf-green-200 rounded-md">{price.discount}</p>
          )}
        </span>
        {price.details && <PrismicRichText field={price.details} />}
      </div>
    </div>
  );
};
