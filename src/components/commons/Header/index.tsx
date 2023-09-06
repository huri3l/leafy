'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { HeaderNav } from './HeaderNav';
import { HeaderIcon } from './HeaderIcon';

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <header className={cn('flex p-4 gap-4 w-full', { 'justify-between': !isSearching })}>
      <HeaderIcon isSearching={isSearching} className="w-fit h-10" />
      <HeaderNav isSearching={isSearching} setIsSearching={setIsSearching} />
    </header>
  );
};
