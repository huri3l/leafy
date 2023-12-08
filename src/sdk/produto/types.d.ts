export interface TProduct {
  product_images: {
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
            type: string;
            no_fee_alternative: number;
        };
    };
};
description: (string | ... 2 more ... | {
    ...;
})[];
}