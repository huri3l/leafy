import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonRoot extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const LinkButtonRoot = ({ children, className, ...props }: LinkButtonRoot) => {
  return (
    <Link
      className={cn(
        'bg-lf-green-400 flex justify-center items-center gap-1 py-2 rounded-md text-lf-gray-800',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
