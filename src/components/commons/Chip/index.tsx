import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/sdk/lib/style';

interface ChipProps {
  children: ReactNode;
  onDelete?: () => void;
}

export const Chip = ({ children, onDelete }: ChipProps) => {
  return (
    <div
      className={cn(
        'bg-lf-gray-300 flex justify-center items-center gap-1.5 text-center w-fit text-sm rounded-full py-0.5',
        { 'px-3': !onDelete, 'pl-3 pr-2': onDelete },
      )}
    >
      {children}
      {onDelete && (
        <button className="w-fit h-fit rounded-full bg-lf-gray-200" onClick={onDelete}>
          <X width={14} height={14} />
        </button>
      )}
    </div>
  );
};
