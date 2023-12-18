'use client';
import { Filter as FilterIcon, X } from 'lucide-react';
import { Button } from '../../commons/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { TFilterOption } from '@/sdk/produto/types';
import { FilterOptions } from './FilterOptions';
import { FilterFooter } from './FilterFooter';
import { FilterHeader } from './FilterHeader';

interface FilterProps {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
}

export const Filter = ({ options, hasPriceFilter = false }: FilterProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="group" asChild>
        <Button
          icon={{
            position: 'left',
            render: FilterIcon,
          }}
          color="transparent"
          className="font-normal gap-3"
        >
          Filtrar
        </Button>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />

      <Dialog.Content className="fixed bottom-0 left-0 w-full h-2/3 bg-lf-gray-100 p-4 group-data-[state=open]:bg-blue transition-all animate-expand-bottom-3/4 z-50">
        <div className="flex flex-col h-full">
          <FilterHeader />
          <FilterOptions options={options} hasPriceFilter={hasPriceFilter} />
          <FilterFooter />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
