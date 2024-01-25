import { SubmitHandler, useForm } from 'react-hook-form';
import { TextInput, TextInputIcon } from '../../../ui/input/text';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { dict } from '@/content/dictionary';
import { routes } from '@/lib/routes';

type SearchFieldProps = {
  onLeave: () => void;
};

type TForm = {
  term: string;
};

export const SearchField = ({ onLeave }: SearchFieldProps) => {
  const { register, handleSubmit } = useForm<TForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TForm> = ({ term }) => {
    router.push(routes.search(term));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animate-expand-full">
      <TextInput
        className="text-xs"
        type="text"
        placeholder={dict('header.search')}
        autoFocus
        {...register('term', { onBlur: onLeave })}
      >
        <TextInputIcon icon={X} />
      </TextInput>
    </form>
  );
};
