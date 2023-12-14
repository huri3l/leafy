import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../commons/Button';
import Link from 'next/link';

interface ProductCardProps {
  link: string;
  name: string;
  price: string;
  image: {
    url: string;
    alt: string;
  };
  className?: string;
}

export const ProductCard = ({ name, link, price, image, className }: ProductCardProps) => {
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
            />
          </Link>
        </div>
        <div className="flex flex-col p-2.5">
          <span>{name}</span>
          <span className="text-lf-green-alt">{price}</span>
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