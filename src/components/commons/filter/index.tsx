'use client';
import { FilterOptions } from './filter-options';
import { FilterFooter } from './filter-footer';
import { FilterHeader } from './filter-header';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { TFilterOption } from '@/content/types';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Filter as FilterIcon } from 'lucide-react';
import { dict } from '@/content/dictionary';
import { ScrollArea } from '@/components/ui/scroll-area';

type FilterProps = {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
};

export type FilterFormInputs = {
  from: number;
  to: number;
};

export const Filter = ({ options, hasPriceFilter = false }: FilterProps) => {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="font-normal gap-3">
          <FilterIcon className="w-5 h-5" />
          {dict('general.filter')}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <FilterHeader />
          <ScrollArea className="h-[60vh] w-full">
            <FilterOptions options={options} hasPriceFilter={hasPriceFilter} register={register} />
          </ScrollArea>
          <FilterFooter />
        </form>
      </DrawerContent>
    </Drawer>
  );
};
