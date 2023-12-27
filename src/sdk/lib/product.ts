import { TRichText } from '../types';
import { formatPrice } from './format';

const NO_FEE_DEFAULT_TIMES = 3;

type TPrice = {
  value: number;
  promotion?:
    | {
        new_value: number;
        amount: number;
        condition: {
          type: string;
          no_fee_alternative: number;
        };
      }
    | undefined;
  no_fee_alternative?: number | undefined;
};

export const getProductPriceDetails = (price: TPrice): TRichText[] | undefined => {
  if (price?.promotion) {
    const type = price?.promotion?.condition.type;

    if (type === 'cash') {
      return [
        {
          text: [
            {
              regular: 'À vista ou em até ',
            },
            {
              bold: `${price?.promotion?.condition.no_fee_alternative}x de ${formatPrice(
                price?.promotion?.new_value / price?.promotion?.condition.no_fee_alternative,
              )}`,
            },
            {
              regular: ' sem juros',
            },
          ],
        },
      ];
    }
  } else {
    return [
      {
        text: [
          {
            regular: 'À vista ou em até ',
          },
          {
            bold: `${NO_FEE_DEFAULT_TIMES}x de ${formatPrice(price?.value / NO_FEE_DEFAULT_TIMES)}`,
          },
          {
            regular: ' sem juros',
          },
        ],
      },
    ];
  }
};

export const getDiscountAmount = (price: TPrice) => {
  return price?.promotion && `-${price?.promotion?.amount * 100}%`;
};

export const getCurrentPrice = (price: TPrice) => {
  return price?.promotion ? formatPrice(price?.promotion?.new_value) : formatPrice(price.value);
};
