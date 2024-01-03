import { RichTextField } from '@prismicio/client';

export type TImage = {
  url: string;
  alt: string;
};

export type TPrice = {
  raw: number;
  formatted: string;
};

export type TRichText = RichTextField;
