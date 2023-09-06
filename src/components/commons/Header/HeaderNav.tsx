import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Input } from '../Input';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

interface IForm {
  term: string;
}

interface HeaderNavProps {
  handleSearch: {
    search: boolean;
    setSearch: (search: boolean) => void;
  };
}

export const HeaderNav = ({ handleSearch }: HeaderNavProps) => {
  const { search, setSearch } = handleSearch;
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IForm> = ({ term }) => {
    router.push(`/produtos?busca=${term}`);
  };

  const openSearch = () => setSearch(true);
  const closeSearch = () => setSearch(false);

  return (
    <nav className="flex gap-4 items-center justify-end grow">
      {search ? (
        <motion.div initial={{ width: '30%' }} animate={{ width: '100%' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input.Root
              className="grow border-lf-gray-600"
              type="text"
              placeholder="O que você está procurando?"
              autoFocus
              {...register('term', { onBlur: closeSearch })}
            >
              <Input.Icon icon={X} />
            </Input.Root>
          </form>
        </motion.div>
      ) : (
        <>
          <Link href="/sacola">
            <ShoppingBag className="w-7 h-7 stroke-lf-gray-600" />
          </Link>
          <button onClick={openSearch}>
            <Search className="w-7 h-7 stroke-lf-gray-600" />
          </button>
        </>
      )}
      <Menu className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
    </nav>
  );
};
