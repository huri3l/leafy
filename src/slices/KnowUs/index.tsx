import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KnowUs`.
 */
export type KnowUsProps = SliceComponentProps<Content.KnowUsSlice>;

/**
 * Component for "KnowUs" Slices.
 */
const KnowUs = ({ slice }: KnowUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for know_us (variation: {slice.variation}) Slices
    </section>
  );
};

export default KnowUs;
