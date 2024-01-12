import { dict } from '@/content/dictionary';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const SortHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <strong className="text-xl font-bold">{dict('general.sort')}</strong>
        <DialogClose>
          <X className="w-7 h-7 stroke-lf-gray-600 shrink-0" />
        </DialogClose>
      </div>
    </div>
  );
};
