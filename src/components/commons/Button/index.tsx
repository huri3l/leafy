import { cn } from '@/lib/utils';
import { ComponentProps, ElementType } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'font-medium rounded-md',
  variants: {
    color: {
      primary: 'text-lf-gray-800 bg-lf-green-200',
      secondary: 'text-lf-gray-800 border',
      success: 'text-lf-gray-800 bg-lf-green-400',
    },
    size: {
      sm: 'px-3 py-1.5 text-base',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    icon?: {
      render: ElementType;
      position: 'left' | 'right';
    };
  };

export const Button = ({ children, className, icon, ...props }: ButtonProps) => {
  const Icon = icon?.render;
  const position = icon?.position;

  return (
    <button className={cn(button(props), className, 'flex items-center justify-center gap-1')}>
      {icon && Icon && position === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {icon && Icon && position === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};
