import { ElementType } from 'react';

interface InputIconProps {
  icon: ElementType;
}

export const LinkButtonIcon = ({ icon: Icon }: InputIconProps) => {
  return <Icon className="w-5 h-5 stroke-lf-gray-800" />;
};
