import { ComponentProps } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Leafy, LeafySm } from '../leafy-icons';

type HeaderIconProps = ComponentProps<'svg'> & {
  isSearching: boolean;
};

export const HeaderIcon = ({ isSearching, className, ...props }: HeaderIconProps) => {
  return (
    <Link href="/">
      {isSearching ? (
        <LeafySm {...props} className={cn(className, 'w-[32px]')} />
      ) : (
        <Leafy {...props} className={cn(className, 'w-[95px]')} />
      )}
    </Link>
  );
};
