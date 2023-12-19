'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { TFilterOption } from '@/sdk/produto/types';
import { FilterOptions } from './FilterOptions';
import { FilterFooter } from './FilterFooter';
import { FilterHeader } from './FilterHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { FilterOpenButton } from './FilterOpenButton';

interface FilterProps {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
}

export type FilterFormInputs = {
  from: number;
  to: number;
};

export const Filter = ({ options, hasPriceFilter = false }: FilterProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { priceFilters, insertPriceFilter, removePriceFilter } = useFilter();
  const { register, handleSubmit } = useForm<FilterFormInputs>({
    defaultValues: {
      from: priceFilters.from ? Number(priceFilters.from) : undefined,
      to: priceFilters.to ? Number(priceFilters.to) : undefined,
    },
  });

  const onSubmit: SubmitHandler<FilterFormInputs> = (data) => {
    closeModal();

    if (data.from) insertPriceFilter('from', data.from);
    if (data.to) insertPriceFilter('to', data.to);
    if (!data.from) removePriceFilter('from');
    if (!data.to) removePriceFilter('to');
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <FilterOpenButton />
      <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
      <Dialog.Content className="fixed bottom-0 left-0 w-full h-2/3 bg-lf-gray-100 p-4 group-data-[state=open]:bg-blue transition-all animate-expand-bottom-3/4 z-50">
        <form className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
          <FilterHeader />
          <FilterOptions options={options} hasPriceFilter={hasPriceFilter} register={register} />
          <FilterFooter />
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
