import { cn } from '@/lib/style';
import { ElementType } from 'react';

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
