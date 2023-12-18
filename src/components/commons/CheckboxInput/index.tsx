import { cn } from '@/sdk/lib/style';
import { forwardRef, ComponentProps } from 'react';

type CheckboxInputProps = ComponentProps<'input'> & {
  id: string;
  label: string;
};

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ className, id, label, ...props }, ref) => {
    return (
      <div className="w-full flex gap-3 items-center">
        <input
          id={id}
          ref={ref}
          {...props}
          type="checkbox"
          className={cn(
            'w-4 h-4 accent-lf-green-alt bg-gray-100 border-gray-300 rounded focus:ring-lf-green-400 focus:ring-2',
            className,
          )}
        />
        <label htmlFor={id} className="inline-block w-full">
          {label}
        </label>
      </div>
    );
  },
);

CheckboxInput.displayName = 'CheckboxInput';
