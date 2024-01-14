import { RadioInput } from '@/components/commons/Input/Radio';
import { UseFormRegister } from 'react-hook-form';
import { SortFormInputs } from '.';
import { dict } from '@/content/dictionary';

type SortOptionsProps = {
  register: UseFormRegister<SortFormInputs>;
};

export const SortOptions = ({ register }: SortOptionsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        id="ascending"
        value="ascending"
        label={dict('sort.ascending')}
        {...register('sort')}
      />
      <RadioInput
        id="descending"
        value="descending"
        label={dict('sort.descending')}
        {...register('sort')}
      />
      <RadioInput id="cheap" value="cheap" label={dict('sort.cheap')} {...register('sort')} />
      <RadioInput
        id="expensive"
        value="expensive"
        label={dict('sort.expensive')}
        {...register('sort')}
      />
    </div>
  );
};
