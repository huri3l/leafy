// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryDocumentDataSlicesSlice = ProductCarouselSlice;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Details field in *Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.details
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;

  /**
   * Slice Zone field in *Category*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: category.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoryDocumentDataSlicesSlice> /**
   * Meta Description field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: category.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Category*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: category.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Item in *Footer → Items*
 */
export interface FooterDocumentDataItemsItem {
  /**
   * Label field in *Footer → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Footer → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Items field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<FooterDocumentDataItemsItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *Header → Items*
 */
export interface HeaderDocumentDataItemsItem {
  /**
   * name field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Icon field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * Link field in *Header → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Role field in *Header → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].role
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  role: prismic.SelectField<"Search" | "Menu">;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Items field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<HeaderDocumentDataItemsItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

/**
 * Item in *Home → About Us*
 */
export interface HomeDocumentDataAboutUsItem {
  /**
   * Icon field in *Home → About Us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_us[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * Title field in *Home → About Us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_us[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Home → About Us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_us[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

type HomeDocumentDataSlicesSlice =
  | CategorySlice
  | ProductCarouselSlice
  | KnowUsSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * About Us Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_us_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_us_title: prismic.KeyTextField;

  /**
   * About Us field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_us[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  about_us: prismic.GroupField<Simplify<HomeDocumentDataAboutUsItem>>;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Menu → Items*
 */
export interface MenuDocumentDataItemsItem {
  /**
   * Link field in *Menu → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Icon field in *Menu → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * Label field in *Menu → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

type MenuDocumentDataSlicesSlice = MenuItemWithSubitemsSlice;

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
  /**
   * Items field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<MenuDocumentDataItemsItem>>;

  /**
   * Slice Zone field in *Menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MenuDocumentDataSlicesSlice>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;

/**
 * Item in *Product Page → Images*
 */
export interface ProductPageDocumentDataImagesItem {
  /**
   * Image field in *Product Page → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type ProductPageDocumentDataSlicesSlice = ProductPriceSlice;

/**
 * Content for Product Page documents
 */
interface ProductPageDocumentData {
  /**
   * Images field in *Product Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<ProductPageDocumentDataImagesItem>>;

  /**
   * Name field in *Product Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *Product Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Product Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Product Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: product_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Product Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: product_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Product Page document from Prismic
 *
 * - **API ID**: `product_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductPageDocumentData>,
    "product_page",
    Lang
  >;

export type AllDocumentTypes =
  | CategoryDocument
  | FooterDocument
  | HeaderDocument
  | HomeDocument
  | MenuDocument
  | ProductPageDocument;

/**
 * Primary content in *Category → Primary*
 */
export interface CategorySliceDefaultPrimary {
  /**
   * Title field in *Category → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Category → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * See More field in *Category → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: category.primary.see_more
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  see_more: prismic.BooleanField;
}

/**
 * Primary content in *Category → Items*
 */
export interface CategorySliceDefaultItem {
  /**
   * Preview field in *Category → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category.items[].preview
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Title field in *Category → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Category → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Redirect To field in *Category → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: category.items[].redirect_to
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  redirect_to: prismic.LinkField;
}

/**
 * Default variation for Category Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategorySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CategorySliceDefaultPrimary>,
  Simplify<CategorySliceDefaultItem>
>;

/**
 * Slice variation for *Category*
 */
type CategorySliceVariation = CategorySliceDefault;

/**
 * Category Shared Slice
 *
 * - **API ID**: `category`
 * - **Description**: Category
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CategorySlice = prismic.SharedSlice<
  "category",
  CategorySliceVariation
>;

/**
 * Primary content in *KnowUs → Primary*
 */
export interface KnowUsSliceDefaultPrimary {
  /**
   * TItle field in *KnowUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: know_us.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Image field in *KnowUs → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: know_us.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Search Placeholder field in *KnowUs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: know_us.primary.search_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  search_placeholder: prismic.KeyTextField;
}

/**
 * Primary content in *KnowUs → Items*
 */
export interface KnowUsSliceDefaultItem {
  /**
   * Statistic field in *KnowUs → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: know_us.items[].statistic
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  statistic: prismic.RichTextField;
}

/**
 * Default variation for KnowUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type KnowUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<KnowUsSliceDefaultPrimary>,
  Simplify<KnowUsSliceDefaultItem>
>;

/**
 * Slice variation for *KnowUs*
 */
type KnowUsSliceVariation = KnowUsSliceDefault;

/**
 * KnowUs Shared Slice
 *
 * - **API ID**: `know_us`
 * - **Description**: KnowUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type KnowUsSlice = prismic.SharedSlice<"know_us", KnowUsSliceVariation>;

/**
 * Primary content in *MenuItemWithSubitems → Primary*
 */
export interface MenuItemWithSubitemsSliceDefaultPrimary {
  /**
   * Label field in *MenuItemWithSubitems → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item_with_subitems.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Icon field in *MenuItemWithSubitems → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item_with_subitems.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;
}

/**
 * Primary content in *MenuItemWithSubitems → Items*
 */
export interface MenuItemWithSubitemsSliceDefaultItem {
  /**
   * Label field in *MenuItemWithSubitems → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item_with_subitems.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *MenuItemWithSubitems → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item_with_subitems.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MenuItemWithSubitems Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemWithSubitemsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemWithSubitemsSliceDefaultPrimary>,
  Simplify<MenuItemWithSubitemsSliceDefaultItem>
>;

/**
 * Slice variation for *MenuItemWithSubitems*
 */
type MenuItemWithSubitemsSliceVariation = MenuItemWithSubitemsSliceDefault;

/**
 * MenuItemWithSubitems Shared Slice
 *
 * - **API ID**: `menu_item_with_subitems`
 * - **Description**: MenuItemWithSubitems
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemWithSubitemsSlice = prismic.SharedSlice<
  "menu_item_with_subitems",
  MenuItemWithSubitemsSliceVariation
>;

/**
 * Primary content in *Product → Primary*
 */
export interface ProductCarouselSliceDefaultPrimary {
  /**
   * Title field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Product → Items*
 */
export interface ProductCarouselSliceDefaultItem {
  /**
   * Preview field in *Product → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].preview
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Name field in *Product → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Price field in *Product → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Slug field in *Product → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].slug
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slug: prismic.KeyTextField;

  /**
   * Redirect To field in *Product → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].redirect_to
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  redirect_to: prismic.LinkField;
}

/**
 * Carousel variation for Product Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductCarouselSliceDefaultPrimary>,
  Simplify<ProductCarouselSliceDefaultItem>
>;

/**
 * Primary content in *Product → Primary*
 */
export interface ProductCarouselSliceListPrimary {
  /**
   * Title field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Product → Items*
 */
export interface ProductCarouselSliceListItem {
  /**
   * Preview field in *Product → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].preview
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Name field in *Product → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Price field in *Product → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Tags field in *Product → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Grouped by -, separated by ,
   * - **API ID Path**: product_carousel.items[].tags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tags: prismic.KeyTextField;

  /**
   * Slug field in *Product → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].slug
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slug: prismic.KeyTextField;
}

/**
 * List variation for Product Slice
 *
 * - **API ID**: `list`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCarouselSliceList = prismic.SharedSliceVariation<
  "list",
  Simplify<ProductCarouselSliceListPrimary>,
  Simplify<ProductCarouselSliceListItem>
>;

/**
 * Slice variation for *Product*
 */
type ProductCarouselSliceVariation =
  | ProductCarouselSliceDefault
  | ProductCarouselSliceList;

/**
 * Product Shared Slice
 *
 * - **API ID**: `product_carousel`
 * - **Description**: ProductCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCarouselSlice = prismic.SharedSlice<
  "product_carousel",
  ProductCarouselSliceVariation
>;

/**
 * Primary content in *ProductPrice → Primary*
 */
export interface ProductPriceSliceDefaultPrimary {
  /**
   * Price field in *ProductPrice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Details field in *ProductPrice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.details
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;
}

/**
 * Default variation for ProductPrice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductPriceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductPriceSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ProductPrice → Primary*
 */
export interface ProductPriceSlicePriceWithDiscountPrimary {
  /**
   * Price field in *ProductPrice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Details field in *ProductPrice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.details
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;

  /**
   * Old Price field in *ProductPrice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.old_price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  old_price: prismic.NumberField;

  /**
   * Discount Amount field in *ProductPrice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product_price.primary.discount_amount
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  discount_amount: prismic.NumberField;
}

/**
 * Price with discount variation for ProductPrice Slice
 *
 * - **API ID**: `priceWithDiscount`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductPriceSlicePriceWithDiscount = prismic.SharedSliceVariation<
  "priceWithDiscount",
  Simplify<ProductPriceSlicePriceWithDiscountPrimary>,
  never
>;

/**
 * Slice variation for *ProductPrice*
 */
type ProductPriceSliceVariation =
  | ProductPriceSliceDefault
  | ProductPriceSlicePriceWithDiscount;

/**
 * ProductPrice Shared Slice
 *
 * - **API ID**: `product_price`
 * - **Description**: ProductPrice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductPriceSlice = prismic.SharedSlice<
  "product_price",
  ProductPriceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CategoryDocument,
      CategoryDocumentData,
      CategoryDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataItemsItem,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataItemsItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataAboutUsItem,
      HomeDocumentDataSlicesSlice,
      MenuDocument,
      MenuDocumentData,
      MenuDocumentDataItemsItem,
      MenuDocumentDataSlicesSlice,
      ProductPageDocument,
      ProductPageDocumentData,
      ProductPageDocumentDataImagesItem,
      ProductPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CategorySlice,
      CategorySliceDefaultPrimary,
      CategorySliceDefaultItem,
      CategorySliceVariation,
      CategorySliceDefault,
      KnowUsSlice,
      KnowUsSliceDefaultPrimary,
      KnowUsSliceDefaultItem,
      KnowUsSliceVariation,
      KnowUsSliceDefault,
      MenuItemWithSubitemsSlice,
      MenuItemWithSubitemsSliceDefaultPrimary,
      MenuItemWithSubitemsSliceDefaultItem,
      MenuItemWithSubitemsSliceVariation,
      MenuItemWithSubitemsSliceDefault,
      ProductCarouselSlice,
      ProductCarouselSliceDefaultPrimary,
      ProductCarouselSliceDefaultItem,
      ProductCarouselSliceListPrimary,
      ProductCarouselSliceListItem,
      ProductCarouselSliceVariation,
      ProductCarouselSliceDefault,
      ProductCarouselSliceList,
      ProductPriceSlice,
      ProductPriceSliceDefaultPrimary,
      ProductPriceSlicePriceWithDiscountPrimary,
      ProductPriceSliceVariation,
      ProductPriceSliceDefault,
      ProductPriceSlicePriceWithDiscount,
    };
  }
}
