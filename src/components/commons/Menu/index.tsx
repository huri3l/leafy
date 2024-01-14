import { Menu as MenuIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { MenuOptionsContainer } from './MenuOptionsContainer';

import { TMenuOption } from './MenuOption';
import { dict } from '@/content/dictionary';

export const Menu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="group">
        <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black/40 z-[60]" />

      <Dialog.Content className="fixed top-0 right-0 w-5/6 h-full bg-lf-gray-100 p-4 group-data-[state=open]:bg-blue transition-all animate-expand-menu z-[61]">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <Dialog.Close>
              <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
            </Dialog.Close>
            <MenuOptionsContainer items={dict('menu.items') as TMenuOption[]} />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
