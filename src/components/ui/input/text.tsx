import { cn } from '@/lib/utils';
import { forwardRef, ComponentProps, ElementType } from 'react';

type TextInputProps = ComponentProps<'input'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
TextInput.displayName = 'Input';

type TextInputIconProps = {
  icon: ElementType;
  className?: string;
};

export const TextInputIcon = ({ icon: Icon, className }: TextInputIconProps) => {
  return (
    <Icon
      className={cn(
        'absolute w-6 h-6 right-2 top-1/2 transform -translate-y-1/2 stroke-lf-gray-600',
        className,
      )}
    />
  );
};
