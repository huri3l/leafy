import { ComponentProps } from 'react';
import { Leafy, LeafySm } from '@/assets/icons';

interface HeaderIconProps extends ComponentProps<'svg'> {
  isSearching: boolean;
}

export const HeaderIcon = ({ isSearching, ...props }: HeaderIconProps) => {
  return isSearching ? <LeafySm {...props} /> : <Leafy {...props} />;
};
