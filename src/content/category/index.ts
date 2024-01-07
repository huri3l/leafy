import { createClient } from '@/prismicio';
import { TCategoryPage } from './types';
import { cleanCmsImage, cleanCmsLink, getFilters } from '@/lib/cms';
import { formatPrice } from '@/lib/format';

export const getCategory = async (slug: string) => {
  const client = createClient();
  const { data } = await client.getByUID('category', slug);
  const productList = data.slices[0]?.variation === 'list' ? data.slices[0]?.items : [];

  const category: TCategoryPage = {
    details: data.details,
    name: String(data.slices[0]?.primary.title),
    products: productList.map((item) => {
      return {
        name: String(item.name),
        image: cleanCmsImage(item.preview),
        price: {
          raw: Number(item.price),
          formatted: formatPrice(Number(item.price)),
        },
        slug: String(item.slug),
        tags: item.tags?.split(',').map((item) => item.trim()),
        link: cleanCmsLink(item.redirect_to, {
          prefix: 'produto',
        }),
      };
    }),
    filters: getFilters(productList, true),
  };

  return category;
};
