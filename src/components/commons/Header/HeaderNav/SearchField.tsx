import { SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from '../../Input/Text';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

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
    router.push(`/produtos?busca=${term}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animate-expand-full">
      <TextInput.Root
        className="text-xs"
        type="text"
        placeholder="O que você está procurando?"
        autoFocus
        {...register('term', { onBlur: onLeave })}
      >
        <TextInput.Icon icon={X} />
      </TextInput.Root>
    </form>
  );
};
