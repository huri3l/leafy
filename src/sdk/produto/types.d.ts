export type TRichText =
  | { bold: string }
  | { text: string }
  | { unordered_list: string[] }
  | 'line_break';

export interface TProduct {
  images: {
    url: string;
    alt: string;
  }[];
  name: string;
  price: {
    value: number;
    promotion: {
      new_value: number;
      amount: number;
      condition: {
        type: 'cash';
        no_fee_alternative: number;
      };
    };
  };
  description: TRichText[];
}
