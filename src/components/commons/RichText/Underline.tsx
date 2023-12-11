import { ReactNode } from 'react';

interface UnderlineProps {
  children: ReactNode;
}

export const Underline = ({ children }: UnderlineProps) => {
  return <u className="undelrine">{children}</u>;
};
