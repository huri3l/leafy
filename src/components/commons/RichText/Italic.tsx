import { ReactNode } from 'react';

interface ItalicProps {
  children: ReactNode;
}

export const Italic = ({ children }: ItalicProps) => {
  return <i>{children}</i>;
};
