import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Category`.
 */
export type CategoryProps = SliceComponentProps<Content.CategorySlice>;

/**
 * Component for "Category" Slices.
 */
const Category = ({ slice }: CategoryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for category (variation: {slice.variation}) Slices
    </section>
  );
};

export default Category;
