import { cn } from '@/lib/utils';

type ArrowsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export const Arrows = ({ canScrollPrev, canScrollNext, onPrev, onNext }: ArrowsProps) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (canScrollPrev) {
            onPrev();
          }
        }}
        disabled={!canScrollPrev}
        className={cn('px-4 py-2 text-white rounded-md', {
          'bg-indigo-200': !canScrollPrev,
          'bg-indigo-400': canScrollPrev,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (canScrollNext) {
            onNext();
          }
        }}
        disabled={!canScrollNext}
        className={cn('px-4 py-2 text-white rounded-md', {
          'bg-indigo-200': !canScrollNext,
          'bg-indigo-400': canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
