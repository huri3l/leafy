import { AccordionTrigger } from '@/components/commons/Accordion/AccordionTrigger';
import { CheckboxInput } from '@/components/commons/Input/Checkbox';
import { cn } from '@/sdk/lib/style';
import { TFilterOption } from '@/sdk/produto/types';
import * as Accordion from '@radix-ui/react-accordion';
import { useFilter } from '@/hooks/useFilter';
import { NumberInput } from '@/components/commons/Input/Number';
import { UseFormRegister } from 'react-hook-form';
import { FilterFormInputs } from '.';

interface FilterOptionsProps {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
  register: UseFormRegister<FilterFormInputs>;
}

export const FilterOptions = ({
  options,
  register,
  hasPriceFilter = false,
}: FilterOptionsProps) => {
  const { removeTagFilter, insertTagFilter, tagFilters } = useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value.trim();
    const checked = e?.target.checked;

    if (!checked) {
      removeTagFilter(value);
    } else {
      insertTagFilter(value);
    }
  };

  return (
    <Accordion.Root
      className="AccordionRoot my-2 overflow-y-scroll overflow-x-hidden pb-14"
      type="multiple"
    >
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
            <div className={cn('AccordionContentText', 'w-full flex flex-col pt-2 gap-0.5')}>
              {possibilities.map((possibility, idx) => (
                <CheckboxInput
                  key={possibility + idx}
                  id={possibility}
                  label={possibility}
                  value={possibility}
                  onChange={handleChange}
                  checked={tagFilters.includes(possibility)}
                />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}

      {hasPriceFilter && (
        <Accordion.Item
          value={`item-${options.length + 1}`}
          className="border-b-[1px] border-b-lf-gray-200 py-3"
        >
          <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
            <div className="flex gap-2.5 items-center">
              <span className="text-lf-gray-600 font-medium">Preço</span>
            </div>
          </AccordionTrigger>
          <Accordion.Content
            className={cn('AccordionContent', 'flex gap-2.5 animate-expand-bottom-full')}
          >
            <div className="self-stretch w-6 pt-2">
              <div className="bg-lf-gray-300 w-0.5 h-full mx-auto" />
            </div>
            <div className={cn('AccordionContentText', 'w-full flex pt-2 gap-6')}>
              <NumberInput label="De" id="from" placeholder="R$" step="any" {...register('from')} />
              <NumberInput label="Para" id="to" placeholder="R$" step="any" {...register('to')} />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      )}
    </Accordion.Root>
  );
};
