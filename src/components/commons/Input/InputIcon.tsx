import { cn } from '@/lib/utils';
import { ElementType } from 'react';

interface InputIconProps {
  icon: ElementType;
  className?: string;
}

export const InputIcon = ({ icon: Icon, className }: InputIconProps) => {
  return (
    <Icon
      className={cn(
        'absolute w-6 h-6 right-2 top-1/2 transform -translate-y-1/2 stroke-lf-gray-600',
        className,
      )}
    />
  );
};
