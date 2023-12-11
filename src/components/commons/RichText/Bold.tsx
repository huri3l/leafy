import { ReactNode } from 'react';

interface BoldProps {
  children: ReactNode;
}

export const Bold = ({ children }: BoldProps) => {
  return <strong>{children}</strong>;
};
