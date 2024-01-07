import { ComponentProps } from 'react';
import { Leafy, LeafySm } from '@/assets/icons';
import Link from 'next/link';

type HeaderIconProps = ComponentProps<'svg'> & {
  isSearching: boolean;
};

export const HeaderIcon = ({ isSearching, ...props }: HeaderIconProps) => {
  return <Link href="/">{isSearching ? <LeafySm {...props} /> : <Leafy {...props} />}</Link>;
};
