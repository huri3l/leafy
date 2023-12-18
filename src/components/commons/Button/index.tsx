import { cn } from '@/sdk/lib/style';
import { ComponentProps, ElementType } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'font-medium rounded-md',
  variants: {
    color: {
      primary: 'text-lf-gray-800 bg-lf-green-200 border-2 border-lf-green-200',
      secondary: 'text-lf-gray-800 font-normal border-2 border-lf-green-200',
      success: 'text-lf-gray-800 bg-lf-green-400 border-2 border-lf-green-400',
      transparent: 'text-lf-gray-800 bg-transparent border-2 border-transparent',
    },
    size: {
      sm: 'px-2 py-1.5 text-base',
      md: 'px-2 py-2 text-base',
      lg: 'px-3 py-2 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type TButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    icon?: {
      render: ElementType;
      position: 'left' | 'right';
    };
  };

export const Button = ({ children, className, icon, ...props }: TButtonProps) => {
  const Icon = icon?.render;
  const position = icon?.position;

  return (
    <button
      className={cn(button(props), 'flex items-center justify-center gap-1', className)}
      {...props}
    >
      {icon && Icon && position === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {icon && Icon && position === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};
