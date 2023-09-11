import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface SearchFieldProps {
  onLeave: () => void;
}

interface IForm {
  term: string;
}

export const SearchField = ({ onLeave }: SearchFieldProps) => {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IForm> = ({ term }) => {
    router.push(`/produtos?busca=${term}`);
  };

  return (
    <motion.div initial={{ width: '30%' }} animate={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </motion.div>
  );
};
