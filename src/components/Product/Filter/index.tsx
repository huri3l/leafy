'use client';
import { Filter as FilterIcon, X } from 'lucide-react';
import { Button } from '../../commons/Button';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionTrigger } from '@/components/commons/Accordion/AccordionTrigger';
import { cn } from '@/lib/utils';

interface FilterProps {
  options: {
    title: string;
    type: 'price' | 'checkbox';
    possibilities?: string[];
  }[];
}

export const Filter = ({ options }: FilterProps) => {
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
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6 relative">
              <Dialog.Close className="absolute top-0 right-0">
                <X className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
              </Dialog.Close>
            </div>

            <div className="my-2">
              <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
                <div className="flex gap-2.5 items-center">
                  <span className="text-lf-gray-600 text-lg">oi</span>
                </div>
              </AccordionTrigger>
              <Accordion.Content
                className={cn('AccordionContent', 'flex gap-2.5 animate-expand-bottom-full')}
              >
                <div className="self-stretch w-6 pt-2">
                  <div className="bg-lf-gray-300 w-0.5 h-full mx-auto" />
                </div>
                <div className={cn('AccordionContentText', 'flex flex-col pt-2 gap-0.5')}>
                  {/* {subItems?.map(({ label, link }, idx) => (
                    <Link href={link} key={label + idx} className="text-lf-gray-600">
                      {label}
                    </Link>
                  ))} */}
                </div>
              </Accordion.Content>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
