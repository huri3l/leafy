import { Menu as MenuIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { MenuOptionsContainer } from './MenuOptionsContainer';
import { TMenuOption } from './MenuOption';

export const Menu = () => {
  const staticMenuItems: TMenuOption[] = [
    {
      name: 'Em alta',
      icon: 'Flame',
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
    },
    {
      name: 'Pesquisar',
      icon: 'Search',
    },
    {
      name: 'Brindes',
      icon: 'Gift',
    },
    {
      name: 'Fale conosco',
      icon: 'Phone',
    },
    {
      name: 'Conheça a Leafy',
      icon: 'Leaf',
    },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />

      <Dialog.Content className="fixed top-0 right-0 w-5/6 h-full bg-lf-gray-100 p-6">
        <div className="space-y-6">
          <Dialog.Close>
            <MenuIcon className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
          </Dialog.Close>
          <MenuOptionsContainer items={staticMenuItems} />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
