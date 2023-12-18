import { Chip } from '@/components/commons/Chip';
import { useFilter } from '@/hooks/useFilter';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const FilterHeader = () => {
  const { remove, filters } = useFilter();

  const handleDelete = (filter: string) => {
    remove(filter);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <strong className="text-xl font-bold">Filtrar</strong>
        <DialogClose>
          <X className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
        </DialogClose>
      </div>

      {!!filters && (
        <div className="flex gap-2 flex-wrap pb-4 border-b-2 border-b-lf-gray-200">
          {filters?.map((filter) => (
            <Chip key={filter} onDelete={() => handleDelete(filter)}>
              {filter}
            </Chip>
          ))}
        </div>
      )}
    </div>
  );
};
