import { ElementType } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LinkProps } from '@prismicio/react';
import { ReactNode } from 'react';

type TLinkButtonRoot = LinkProps & {
  children: ReactNode;
  className?: string;
};

export const LinkButtonRoot = ({ children, className, ...props }: TLinkButtonRoot) => {
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

type TInputIconProps = {
  icon: ElementType;
};

export const LinkButtonIcon = ({ icon: Icon }: TInputIconProps) => {
  return <Icon className="w-5 h-5 stroke-lf-gray-800" />;
};

export const LinkButton = {
  Root: LinkButtonRoot,
  Icon: LinkButtonIcon,
};
