import { Menu as MenuIcon } from 'lucide-react';
import { MenuOptionsContainer } from './MenuOptionsContainer';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { dict } from '@/content/dictionary';

export const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
      </SheetTrigger>
      <SheetContent className="py-2 px-4">
        <SheetHeader className="mb-6">
          <SheetClose>
            <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
            <span className="sr-only">{dict('general.close')}</span>
          </SheetClose>
        </SheetHeader>
        <MenuOptionsContainer items={dict('menu.items')} />
      </SheetContent>
    </Sheet>
  );
};
