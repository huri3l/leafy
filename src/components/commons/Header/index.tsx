'use client';

import { ComponentProps, useState } from 'react';
import { Leafy, LeafySm } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { HeaderNav } from './HeaderNav';

export const Header = () => {
  const [search, setSearch] = useState(false);

  return (
    <header className={cn('flex p-4 gap-4 w-full', { 'justify-between': !search })}>
      <LeafyIcon isSearching={search} className="w-fit h-10" />
      <HeaderNav handleSearch={{ search, setSearch }} />
    </header>
  );
};

interface LeafyIconProps extends ComponentProps<'svg'> {
  isSearching: boolean;
}

export const LeafyIcon = ({ isSearching, ...props }: LeafyIconProps) => {
  return isSearching ? <LeafySm {...props} /> : <Leafy {...props} />;
};
