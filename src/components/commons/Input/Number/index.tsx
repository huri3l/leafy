import { cn } from '@/sdk/lib/style';
import { ComponentProps, forwardRef } from 'react';

type NumberInputProps = ComponentProps<'input'> & {
  id: string;
  label: string;
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, id, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        <label htmlFor={id} className="text-lf-gray-800">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
          type="number"
          className={cn(
            'w-full border-2 border-zinc-600 focus:outline-lf-green-400 grow rounded-lg px-2 py-1 transition-all',
            className,
          )}
        />
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';
