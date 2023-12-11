import { ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children: ReactNode;
}

export const Link = ({ href, target = '_self', children }: LinkProps) => {
  return (
    <NextLink href={href} target={target} className="text-blue-600 underline">
      {children}
    </NextLink>
  );
};
