import { cn } from '@/lib/utils';
import { forwardRef, ComponentProps } from 'react';

type TextInputProps = ComponentProps<'input'>;

export const TextInputRoot = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          className={cn(
            'w-full border-2 border-lf-gray-600 focus:outline-lf-green-400 grow rounded-lg px-2 py-2',
            className,
          )}
        />
        {children}
      </div>
    );
  },
);

TextInputRoot.displayName = 'TextInput';
