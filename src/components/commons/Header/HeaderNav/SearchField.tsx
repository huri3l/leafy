import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

type TSearchFieldProps = {
  onLeave: () => void;
};

type TForm = {
  term: string;
};

export const SearchField = ({ onLeave }: TSearchFieldProps) => {
  const { register, handleSubmit } = useForm<TForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TForm> = ({ term }) => {
    router.push(`/produtos?busca=${term}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animate-expand-full">
      <Input.Root
        className="text-xs"
        type="text"
        placeholder="O que você está procurando?"
        autoFocus
        {...register('term', { onBlur: onLeave })}
      >
        <Input.Icon icon={X} />
      </Input.Root>
    </form>
  );
};
