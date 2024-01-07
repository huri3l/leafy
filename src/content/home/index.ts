import { createClient } from '@/prismicio';
import { THomeSection } from './types';
import { cleanCmsImage, cleanCmsLink } from '@/lib/cms';
import { formatPrice } from '@/lib/format';

export const getHome = async () => {
  const client = createClient();
  const { data } = await client.getSingle('home');

  const homeSections: THomeSection[] = [
    ...(data.slices
      .map((slice): THomeSection | undefined => {
        if (slice.slice_type === 'know_us') {
          return {
            name: slice.slice_type,
            data: {
              title: String(slice.primary.title),
              image: cleanCmsImage(slice.primary.image),
              statistics: slice.items.map(({ statistic }) => statistic),
            },
          };
        } else if (slice.slice_type === 'category') {
          return {
            name: slice.slice_type,
            title: String(slice.primary.title),
            description: String(slice.primary.description),
            data: {
              categories: slice.items.map((item) => {
                return {
                  title: String(item.title),
                  description: String(item.description),
                  image: cleanCmsImage(item.preview),
                  link: cleanCmsLink(item.redirect_to, {
                    prefix: 'categoria',
                  }),
                };
              }),
              seeMore: slice.primary.see_more,
            },
          };
        } else if (slice.slice_type === 'product_carousel' && slice.variation === 'default') {
          return {
            name: slice.slice_type,
            title: String(slice.primary.title),
            description: String(slice.primary.description),
            data: slice.items.map((item) => {
              return {
                slug: String(item.slug),
                name: String(item.name),
                image: cleanCmsImage(item.preview),
                price: {
                  raw: Number(item.price),
                  formatted: formatPrice(Number(item.price)),
                },
                link: cleanCmsLink(item.redirect_to, {
                  prefix: 'produto',
                }),
              };
            }),
          };
        }
      })
      .filter((slice) => !!slice?.name) as THomeSection[]),
    {
      name: 'about_us',
      title: String(data.about_us_title),
      data: data.about_us.map((item) => {
        return {
          title: String(item.title),
          description: String(item.description),
          icon: String(item.icon),
        };
      }),
    },
  ];

  return homeSections;
};
