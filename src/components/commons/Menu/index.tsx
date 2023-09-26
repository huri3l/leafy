import { Menu as MenuIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { MenuOptionsContainer } from './MenuOptionsContainer';
import { TMenuOption } from './MenuOption';
import { AccountSection } from './AccountSection';

export const Menu = () => {
  const staticMenuItems: TMenuOption[] = [
    {
      name: 'Em alta',
      icon: 'Flame',
      link: '/c/em-alta',
    },
    {
      name: 'Categorias',
      icon: 'Flower',
      subItems: [
        {
          label: 'Cactos',
          link: '/c/cactos',
        },
        {
          label: 'Flores',
          link: '/c/flores',
        },
        {
          label: 'Vasos',
          link: '/c/vasos',
        },
        {
          label: 'Sementes',
          link: '/c/sementes',
        },
        {
          label: 'Decorativas',
          link: '/c/decorativas',
        },
        {
          label: 'Naturais',
          link: '/c/naturais',
        },
      ],
    },
    {
      name: 'Sacola',
      icon: 'ShoppingBag',
      link: '/sacola',
    },
    {
      name: 'Brindes',
      icon: 'Gift',
      link: '/brindes',
    },
    {
      name: 'Fale conosco',
      icon: 'Phone',
      link: '/fale-conosco',
    },
    {
      name: 'Conheça a Leafy',
      icon: 'Leaf',
      link: '/conheca-a-leafy',
    },
    {
      name: 'GitHub',
      icon: 'Github',
      link: 'https://github.com/huri3l/leafy',
    },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger className="group">
        <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />

      <Dialog.Content className="fixed top-0 right-0 w-5/6 h-full bg-lf-gray-100 p-6 group-data-[state=open]:bg-blue transition-all animate-expand-menu z-50">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <Dialog.Close>
              <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
            </Dialog.Close>
            <MenuOptionsContainer items={staticMenuItems} />
          </div>
          <AccountSection />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
