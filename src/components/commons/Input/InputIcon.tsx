import { ElementType } from 'react';

interface InputIconProps {
  icon: ElementType;
}

export const InputIcon = ({ icon: Icon }: InputIconProps) => {
  return (
    <Icon className="absolute w-6 h-6 right-2 top-1/2 transform -translate-y-1/2 stroke-lf-gray-600" />
  );
};
