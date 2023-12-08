import { ComponentProps } from 'react';
import { Leafy, LeafySm } from '@/assets/icons';
import Link from 'next/link';

type THeaderIconProps = ComponentProps<'svg'> & {
  isSearching: boolean;
};

export const HeaderIcon = ({ isSearching, ...props }: THeaderIconProps) => {
  return <Link href="/">{isSearching ? <LeafySm {...props} /> : <Leafy {...props} />}</Link>;
};
