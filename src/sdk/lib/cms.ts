import { LinkField as PrismicLinkField, ImageField, asLink } from '@prismicio/client';

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
