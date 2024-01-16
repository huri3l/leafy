import { CheckboxInput } from '@/components/commons/Input/Checkbox';
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
    <Accordion className="my-2 overflow-y-scroll overflow-x-hidden pb-14" type="multiple">
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
