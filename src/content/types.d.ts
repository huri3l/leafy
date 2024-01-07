import { LinkField, RichTextField } from '@prismicio/client';

export type TImage = {
  url: string;
  alt: string;
};

export type TPrice = {
  raw: number;
  formatted: string;
};

export type TFilterOption = {
  title: string;
  possibilities: string[];
};

export type TLinkField = LinkField & {
  type?: string;
  slug?: string;
  uid?: string;
};

export type TRichText = RichTextField;

export type TProductCard = {
  tags?: string[];
  slug: string;
  name: string;
  price: TPrice;
  link: string;
  image: TImage;
};
