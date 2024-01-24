import { useFilter } from '@/hooks/useFilter';
import { NumberInput } from '@/components/commons/Input/Number';
import { UseFormRegister } from 'react-hook-form';
import { FilterFormInputs } from '.';
import { TFilterOption } from '@/content/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

type FilterOptionsProps = {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
  register: UseFormRegister<FilterFormInputs>;
};

export const FilterOptions = ({
  options,
  register,
  hasPriceFilter = false,
}: FilterOptionsProps) => {
  const { removeTagFilter, insertTagFilter, tagFilters } = useFilter();

  const handleChange = (checked: boolean, filter: string) => {
    if (!checked) {
      removeTagFilter(filter);
    } else {
      insertTagFilter(filter);
    }
  };

  return (
    <Accordion className="my-2 overflow-y-scroll overflow-x-hidden pb-6 px-6" type="multiple">
      {options.map(({ title, possibilities }, idx) => (
        <AccordionItem
          key={title + idx}
          value={`item-${idx}`}
          className="border-b-[1px] border-b-lf-gray-200 py-3"
        >
          <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
            <div className="flex gap-2.5 items-center">
              <span className="text-lf-gray-600 font-medium">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2.5">
            <div className="w-full flex flex-col pt-2 gap-0.5">
              {possibilities.map((filter, idx) => (
                <div key={filter + idx} className="flex items-center space-x-2">
                  <Checkbox
                    id={filter}
                    onCheckedChange={(state) => handleChange(Boolean(state), filter)}
                    checked={tagFilters.includes(filter)}
                  />
                  <label htmlFor={filter}>{filter}</label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}

      {hasPriceFilter && (
        <AccordionItem
          value={`item-${options.length + 1}`}
          className="border-b-[1px] border-b-lf-gray-200 py-3"
        >
          <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
            <div className="flex gap-2.5 items-center">
              <span className="text-lf-gray-600 font-medium">Preço</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2.5">
            <div className="w-full flex pt-2 gap-6">
              <NumberInput label="De" id="from" placeholder="R$" step="any" {...register('from')} />
              <NumberInput label="Para" id="to" placeholder="R$" step="any" {...register('to')} />
            </div>
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};
