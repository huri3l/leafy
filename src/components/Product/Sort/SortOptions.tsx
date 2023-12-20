import { RadioInput } from '@/components/commons/Input/Radio';
import { UseFormRegister } from 'react-hook-form';
import { SortFormInputs } from '.';

interface SortOptionsProps {
  register: UseFormRegister<SortFormInputs>;
}

export const SortOptions = ({ register }: SortOptionsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        id="ascending"
        value="ascending"
        label="Ordem Crescente (A-Z)"
        {...register('sort')}
      />
      <RadioInput
        id="descending"
        value="descending"
        label="Ordem Decrescente (Z-A)"
        {...register('sort')}
      />
      <RadioInput id="cheap" value="cheap" label="Menor Preço" {...register('sort')} />
      <RadioInput id="expensive" value="expensive" label="Maior Preço" {...register('sort')} />
    </div>
  );
};
