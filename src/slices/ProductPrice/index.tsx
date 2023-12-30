import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductPrice`.
 */
export type ProductPriceProps = SliceComponentProps<Content.ProductPriceSlice>;

/**
 * Component for "ProductPrice" Slices.
 */
const ProductPrice = ({ slice }: ProductPriceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_price (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductPrice;
