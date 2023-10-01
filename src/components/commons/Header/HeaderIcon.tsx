import { ComponentProps } from 'react';
import { Leafy, LeafySm } from '@/assets/icons';

type THeaderIconProps = ComponentProps<'svg'> & {
  isSearching: boolean;
};

export const HeaderIcon = ({ isSearching, ...props }: THeaderIconProps) => {
  return isSearching ? <LeafySm {...props} /> : <Leafy {...props} />;
};
