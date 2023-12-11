import { ReactNode } from 'react';

interface RegularProps {
  children: ReactNode;
}

export const Regular = ({ children }: RegularProps) => {
  return <span>{children}</span>;
};
