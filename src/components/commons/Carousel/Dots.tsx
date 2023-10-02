import { cn } from '@/lib/utils';

type TDotsProps = {
  itemsLength: number;
  selectedIndex: number;
  scrollTo: ((index: number) => void) | undefined;
};

export const Dots = ({ itemsLength, selectedIndex, scrollTo }: TDotsProps) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            className={cn('h-2.5 w-2.5 rounded-full transition-all duration-300 bg-lf-green-alt', {
              'opacity-40': !selected,
            })}
            key={index}
            onClick={() => scrollTo && scrollTo(index)}
          />
        );
      })}
    </div>
  );
};