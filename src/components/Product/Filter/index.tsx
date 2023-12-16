'use client';
import { Filter as FilterIcon, X } from 'lucide-react';
import { Button } from '../../commons/Button';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionTrigger } from '@/components/commons/Accordion/AccordionTrigger';
import { cn } from '@/lib/utils';
import { TFilterOption } from '@/sdk/produto/types';
import { CheckboxInput } from '@/components/commons/CheckboxInput';

interface FilterProps {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
}

export const Filter = ({ options, hasPriceFilter = false }: FilterProps) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="group">
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

        <Dialog.Content className="fixed bottom-0 left-0 w-full h-1/3 bg-lf-gray-100 p-4 group-data-[state=open]:bg-blue transition-all animate-expand-bottom-half z-50">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <strong className="text-xl font-bold">Filtrar</strong>
              <Dialog.Close>
                <X className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
              </Dialog.Close>
            </div>

            <Accordion.Root className="AccordionRoot my-2" type="single" collapsible>
              {options.map(({ title, possibilities }, idx) => (
                <Accordion.Item
                  key={title + idx}
                  value={`item-${idx}`}
                  className="border-b-[1px] border-b-lf-gray-200 py-3"
                >
                  <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
                    <div className="flex gap-2.5 items-center">
                      <span className="text-lf-gray-600 font-medium">{title}</span>
                    </div>
                  </AccordionTrigger>
                  <Accordion.Content
                    className={cn('AccordionContent', 'flex gap-2.5 animate-expand-bottom-full')}
                  >
                    <div className="self-stretch w-6 pt-2">
                      <div className="bg-lf-gray-300 w-0.5 h-full mx-auto" />
                    </div>
                    <div
                      className={cn('AccordionContentText', 'w-full flex flex-col pt-2 gap-0.5')}
                    >
                      {possibilities.map((possibility, idx) => (
                        <CheckboxInput
                          key={possibility + idx}
                          id={possibility}
                          label={possibility}
                        />
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
            <div className="flex mt-auto justify-center items-center gap-4">
              <Button color="secondary" className="w-28">
                Limpar
              </Button>
              <Button className="w-28">Filtrar</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
