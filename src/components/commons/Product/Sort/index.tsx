'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { SortOptions } from './SortOptions';
import { SortHeader } from './SortHeader';
import { SortFooter } from './SortFooter';
import { SortOpenButton } from './SortOpenButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SortOptions as SortOptionsType, useSort } from '@/hooks/useSort';
import { useEffect, useState } from 'react';

export type SortFormInputs = {
  sort: SortOptionsType;
};

export const Sort = () => {
  const [openModal, setOpenModal] = useState(false);
  const { sortOption, insertSortOption } = useSort();
  const { register, handleSubmit, reset } = useForm<SortFormInputs>({
    defaultValues: {
      sort: sortOption,
    },
  });

  const onSubmit: SubmitHandler<SortFormInputs> = (data) => {
    insertSortOption(data.sort);
    closeModal();
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (!sortOption) {
      reset();
    }
  }, [sortOption]);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <SortOpenButton />
      <Dialog.Content className="fixed bottom-0 left-0 w-full h-2/3 bg-lf-gray-100 p-4 group-data-[state=open]:bg-blue transition-all animate-expand-bottom-35-percent z-50">
        <form className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
          <SortHeader />
          <SortOptions register={register} />
          <SortFooter />
        </form>
      </Dialog.Content>
      <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
    </Dialog.Root>
  );
};
