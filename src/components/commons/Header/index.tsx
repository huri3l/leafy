'use client';
import { useState } from 'react';
import { cn } from '@/lib/style';
import { HeaderNav } from './HeaderNav';
import { HeaderIcon } from './HeaderIcon';

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <header
      className={cn('flex px-4 py-2 gap-4 w-full bg-lf-gray-100 z-50 sticky top-0', {
        'justify-between': !isSearching,
      })}
    >
      <HeaderIcon isSearching={isSearching} className="w-fit h-9" />
      <HeaderNav isSearching={isSearching} setIsSearching={setIsSearching} />
    </header>
  );
};
