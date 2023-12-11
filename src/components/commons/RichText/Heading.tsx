import { ReactNode } from 'react';

interface HeadingProps {
  size: 'h5' | 'h6';
  children: ReactNode;
}

export const Heading = ({ size, children }: HeadingProps) => {
  if (size === 'h5') {
    return <span className="block font-medium text-2xl mb-3">{children}</span>;
  } else if (size === 'h6') {
    return <span className="block font-medium text-xl mb-2">{children}</span>;
  } else return null;
};
