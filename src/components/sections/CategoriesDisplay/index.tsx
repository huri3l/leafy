import { Button } from '@/components/commons/Button';
import { TCategorySection } from '@/sdk/content/home/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type TCategoriesDisplayProps = {
  data: TCategorySection;
};

export const CategoriesDisplay = ({ data }: TCategoriesDisplayProps) => {
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
        <Button
          className="mx-auto"
          icon={{
            render: ArrowRight,
            position: 'right',
          }}
          size="md"
        >
          Veja mais
        </Button>
      )}
    </div>
  );
};
