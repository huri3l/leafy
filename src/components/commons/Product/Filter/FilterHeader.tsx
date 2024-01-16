import { Badge } from '@/components/ui/badge';
import { dict } from '@/content/dictionary';
import { useFilter } from '@/hooks/useFilter';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const FilterHeader = () => {
  const { removeTagFilter, tagFilters } = useFilter();

  const handleDelete = (filter: string) => {
    removeTagFilter(filter);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <strong className="text-xl font-bold">{dict('general.filter')}</strong>
        <DialogClose>
          <X className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
        </DialogClose>
      </div>

      {tagFilters.length > 0 && (
        <div className="flex gap-2 flex-wrap pb-4 border-b-2 border-b-lf-gray-200">
          {tagFilters?.map((filter) => (
            <Badge key={filter} variant="secondary" className="gap-2">
              {filter}
              <button
                type="button"
                className="w-auto rounded-full bg-lf-gray-200"
                onClick={() => handleDelete(filter)}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
