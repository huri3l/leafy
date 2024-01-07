import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../Button';
import Link from 'next/link';
import { TImage, TPrice } from '@/content/types';

type ProductCardProps = {
  link: string;
  name: string;
  price: TPrice;
  image: TImage;
  className?: string;
  priority?: boolean;
};

export const ProductCard = ({
  name,
  link,
  price,
  image,
  priority = false,
  className,
}: ProductCardProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col rounded-lg bg-white h-full">
        <div className="relative h-3/4">
          <Link href={link}>
            <Image
              key={image.url}
              src={image.url}
              alt={image.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full flex-[1_0_100%] rounded-t-lg object-cover"
              priority={priority}
            />
          </Link>
        </div>
        <div className="flex flex-col p-2.5">
          <span>{name}</span>
          <span className="text-lf-green-alt">{price.formatted}</span>
          <Button
            size="sm"
            color="success"
            icon={{
              render: ShoppingBag,
              position: 'left',
            }}
            className="mt-2 w-fit mx-auto"
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};
