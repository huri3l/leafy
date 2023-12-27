import { Menu as MenuIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { MenuOptionsContainer } from './MenuOptionsContainer';
import { TMenuOption } from './MenuOption';
import { AccountSection } from './AccountSection';

export const Menu = () => {
  const staticMenuItems: TMenuOption[] = [
    {
      name: 'Categorias',
      icon: 'Flower',
      subItems: [
        {
          label: 'Cactos',
          link: {
            url: '/categoria/cactos',
          },
        },
        {
          label: 'Decorativas',
          link: {
            url: '/categoria/plantas-decorativas',
          },
        },
        {
          label: 'Naturais',
          link: {
            url: '/categoria/plantas-naturais',
          },
        },
      ],
    },
    {
      name: 'GitHub',
      icon: 'Github',
      link: { url: 'https://github.com/huri3l/leafy', target: '_blank' },
    },
  ];

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
            <MenuOptionsContainer items={staticMenuItems} />
          </div>
          {/* <AccountSection /> */}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
