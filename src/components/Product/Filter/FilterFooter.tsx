import { Button } from '@/components/commons/Button';
import { useFilter } from '@/hooks/useFilter';
import { DialogClose } from '@radix-ui/react-dialog';

export const FilterFooter = () => {
  const { removeAllFilters } = useFilter();

  return (
    <div className="flex mt-20 w-full p-4 bg-lf-gray-100 drop-shadow-2xl justify-center items-center gap-4 fixed bottom-0 left-0 z-20">
      <DialogClose asChild>
        <Button color="secondary" className="w-28" onClick={removeAllFilters}>
          Limpar
        </Button>
      </DialogClose>
      <Button className="w-28" type="submit">
        Filtrar
      </Button>
    </div>
  );
};
