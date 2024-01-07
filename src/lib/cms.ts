import { ImageField, asLink } from '@prismicio/client';
import { ProductCarouselSliceListItem, ProductPriceSlice } from '../../prismicio-types';
import { TProductPagePrice } from '../content/product/types';
import { TFilterOption, TLinkField } from '@/content/types';
import { formatPrice } from './format';

export const cleanCmsImage = (field: ImageField) => {
  return {
    url: String(field.url),
    alt: String(field.alt),
  };
};

export const cleanCmsLink = (
  link: TLinkField,
  options?: {
    prefix?: string;
  },
) => {
  const isDocument = link.link_type === 'Document';

  if (isDocument && options?.prefix) {
    return `/${options.prefix}/${link.uid}`;
  }

  if (isDocument) {
    return String(link.uid);
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

export const getFilters = (
  products: ProductCarouselSliceListItem[],
  isCategoryPage = false,
): TFilterOption[] => {
  const options: TFilterOption[] = [];

  products.forEach(({ tags: strTags }) => {
    const tags = strTags?.split(',');

    tags?.forEach((tag) => {
      const [title, value] = tag.split('-');

      const existingOption = options.find((option) => option.title === title);

      if (existingOption) {
        if (!existingOption.possibilities.includes(value)) {
          existingOption.possibilities.push(value);
        }
      } else {
        options.push({ title, possibilities: [value] });
      }
    });
  });

  if (isCategoryPage) {
    return options.filter((option) => option.title !== 'Categorias');
  }

  return options;
};
