import { createClient } from '@/prismicio';
import { Metadata } from 'next';
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types';
import { ImageField, KeyTextField } from '@prismicio/client';
import { defaultMeta } from '@/static/metadata';

type Pages = 'home' | 'category' | 'product';

type TSimplifiedMeta = {
  title?: string;
  description?: string;
  image?: string;
};

type TSimplifiedPrismicDocumentMetadata = {
  meta_title?: KeyTextField;
  meta_description?: KeyTextField;
  meta_image?: ImageField;
};

export const getMetadata = async (page: Pages, slug?: string): Promise<Metadata> => {
  const client = createClient();

  let meta: TSimplifiedMeta = {};

  let data: TSimplifiedPrismicDocumentMetadata = {};

  if (page === 'home') {
    data = (await client.getSingle('home')).data;
  } else if (page === 'product' && slug) {
    data = (await client.getByUID('product_page', slug)).data;
  } else if (page === 'category' && slug) {
    data = (await client.getByUID('category', slug)).data;
  } else {
    return defaultMeta;
  }

  meta = {
    title: data.meta_title as string,
    description: data.meta_description as string,
    image: data.meta_image?.url as string,
  };

  return dynamicMetadata(meta);
};

const dynamicMetadata = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  image = defaultMeta.openGraph.images[0].url,
}: TSimplifiedMeta) => {
  return {
    title,
    description,
    applicationName: defaultMeta.applicationName,
    creator: defaultMeta.creator,
    authors: defaultMeta.authors,
    openGraph: {
      type: defaultMeta.openGraph.type as OpenGraphType,
      title: title,
      description: description,
      siteName: defaultMeta.openGraph.siteName,
      images: [
        {
          url: image,
        },
      ],
    },
  };
};
