import { Menu as MenuIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export const Menu = () => {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-0 right-0 w-5/6 h-full bg-lf-gray-100">
          MENU
          <Dialog.Close>X</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
      <Dialog.Trigger>
        <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
      </Dialog.Trigger>
    </Dialog.Root>
  );
};
