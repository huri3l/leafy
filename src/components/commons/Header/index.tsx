'use client';
import { usePathname } from 'next/navigation';
import { HeaderComponent } from './Header';

export const Header = () => {
  const blockedRoutes = ['em-desenvolvimento'];
  const pathname = usePathname();

  const shouldRenderHeader = !blockedRoutes.find((bRoute) => pathname.includes(bRoute));

  return shouldRenderHeader ? <HeaderComponent /> : null;
};
