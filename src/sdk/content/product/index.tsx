import { createClient } from '@/prismicio';
import { TProductPage } from './types';
import { cleanCmsDetailedPrice, cleanCmsImage } from '@/sdk/lib/cms';

export const getProduct = async (slug: string) => {
  const client = createClient();
  const { data } = await client.getByUID('product_page', slug);

  const product: TProductPage = {
    name: String(data.name),
    description: data.description,
    price: cleanCmsDetailedPrice(data.slices[0]!),
    images: data.images.map(({ image }) => cleanCmsImage(image)),
  };

  return product;
};
