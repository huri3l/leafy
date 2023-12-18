import { AccordionTrigger } from '@/components/commons/Accordion/AccordionTrigger';
import { CheckboxInput } from '@/components/commons/CheckboxInput';
import { cn } from '@/sdk/lib/style';
import { TFilterOption } from '@/sdk/produto/types';
import * as Accordion from '@radix-ui/react-accordion';
import { useFilter } from '@/hooks/useFilter';

interface FilterOptionsProps {
  options: TFilterOption[];
  hasPriceFilter?: boolean;
}

export const FilterOptions = ({ options, hasPriceFilter = false }: FilterOptionsProps) => {
  const { remove, insert, filters } = useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value.trim();
    const checked = e?.target.checked;

    if (!checked) {
      remove(value);
    } else {
      insert(value);
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
                  checked={filters.includes(possibility)}
                />
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
