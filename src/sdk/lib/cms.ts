import { LinkField as PrismicLinkField, ImageField, asLink } from '@prismicio/client';
import { ProductPriceSlice } from '../../../prismicio-types';
import { TProductPagePrice } from '../content/product/types';
import { formatPrice } from './format';

export type LinkField = PrismicLinkField & {
  type?: string;
  slug?: string;
  uid?: string;
};

export const cleanCmsImage = (field: ImageField) => {
  return {
    url: String(field.url),
    alt: String(field.alt),
  };
};

export const cleanCmsLink = (link: LinkField, format: 'mix' | 'none' = 'none') => {
  if (link.link_type === 'Document' && format === 'mix' && link.type && link.uid) {
    return `/${link.type}/${link.uid}`;
  } else if (link.link_type === 'Document' && format === 'none' && link.uid) {
    return link.uid;
  }

  return String(asLink(link) ?? '');
};

export const cleanCmsDetailedPrice = (price: ProductPriceSlice): TProductPagePrice => {
  if (price.variation === 'priceWithDiscount') {
    return {
      current: {
        raw: Number(price.primary.price),
        formatted: formatPrice(Number(price.primary.price)),
      },
      old: {
        raw: Number(price.primary.old_price),
        formatted: formatPrice(Number(price.primary.old_price)),
      },
      details: price.primary.details,
      discount: `-${Number(price.primary.discount_amount) * 100}%`,
    };
  } else {
    return {
      current: {
        raw: Number(price.primary.price),
        formatted: formatPrice(Number(price.primary.price)),
      },
      details: price.primary.details,
    };
  }
};
