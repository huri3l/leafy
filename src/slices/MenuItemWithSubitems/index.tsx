import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MenuItemWithSubitems`.
 */
export type MenuItemWithSubitemsProps =
  SliceComponentProps<Content.MenuItemWithSubitemsSlice>;

/**
 * Component for "MenuItemWithSubitems" Slices.
 */
const MenuItemWithSubitems = ({
  slice,
}: MenuItemWithSubitemsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu_item_with_subitems (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default MenuItemWithSubitems;
