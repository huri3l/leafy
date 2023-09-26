import { cn } from '@/lib/utils';
import { forwardRef, ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {}

export const InputRoot = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, ...props }, ref) => {
    const isPassword = props?.type === 'password';

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

InputRoot.displayName = 'Input';
