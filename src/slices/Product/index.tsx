import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductCarousel`.
 */
export type ProductCarouselProps =
  SliceComponentProps<Content.ProductCarouselSlice>;

/**
 * Component for "ProductCarousel" Slices.
 */
const ProductCarousel = ({ slice }: ProductCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_carousel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductCarousel;
