'use client';
import { SortOptions } from './sort-options';
import { SortFooter } from './sort-footer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SortOptions as SortOptionsType, useSort } from '@/hooks/useSort';
import { useEffect, useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { dict } from '@/content/dictionary';
import { ArrowDownAZ } from 'lucide-react';

export type SortFormInputs = {
  sort: SortOptionsType;
};

export const Sort = () => {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  };

  useEffect(() => {
    if (!sortOption) {
      reset();
    }
  }, [sortOption]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="font-normal gap-3">
          <ArrowDownAZ className="w-5 h-5" />
          {dict('general.sort')}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <form className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
          <DrawerHeader>
            <strong className="text-xl font-bold">{dict('general.sort')}</strong>
          </DrawerHeader>
          <SortOptions register={register} />
          <SortFooter />
        </form>
      </DrawerContent>
    </Drawer>
  );
};
