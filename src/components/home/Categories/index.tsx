import { Button } from '@/components/ui/button';
import { dict } from '@/content/dictionary';
import { TCategorySection } from '@/content/home/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CategoriesProps = {
  data: TCategorySection;
};

export const Categories = ({ data }: CategoriesProps) => {
  const { categories, seeMore } = data;

  return (
    <div className="flex flex-col gap-4">
      {categories.map(({ title, description, image, link }, idx) => (
        <Link href={link} key={title + idx} className="relative">
          <div className="relative w-full h-44">
            <Image src={image.url} alt={image.alt} fill className="object-cover rounded-2xl" />
          </div>
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl" />
          <div className="absolute z-20 bottom-4 left-3 flex flex-col text-white">
            <strong className="text-lg">{title}</strong>
            <span>{description}</span>
          </div>
        </Link>
      ))}
      {seeMore && (
        <Button className="mx-auto" size="md">
          <ArrowRight className="w-5 h-5" />
          {dict('general.seeMore')}
        </Button>
      )}
    </div>
  );
};
