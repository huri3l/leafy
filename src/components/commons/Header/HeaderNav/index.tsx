import { Search, ShoppingBag } from 'lucide-react';
import { SearchField } from './SearchField';
import { useCallback } from 'react';
import Link from 'next/link';
import { Menu } from '../../Menu';

interface HeaderNavProps {
  isSearching: boolean;
  setIsSearching: (search: boolean) => void;
}

export const HeaderNav = ({ isSearching, setIsSearching }: HeaderNavProps) => {
  const showSearchField = useCallback(() => setIsSearching(true), []);
  const closeSearchField = useCallback(() => setIsSearching(false), []);

  return (
    <nav className="flex gap-4 items-center justify-end grow">
      {isSearching ? (
        <SearchField onLeave={closeSearchField} />
      ) : (
        <>
          <Link href="/sacola">
            <ShoppingBag className="w-7 h-7 stroke-lf-gray-600" />
          </Link>
          <button onClick={showSearchField}>
            <Search className="w-7 h-7 stroke-lf-gray-600" />
          </button>
        </>
      )}
      <Menu />
    </nav>
  );
};
