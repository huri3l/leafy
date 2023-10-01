import { ElementType } from 'react';

type TInputIconProps = {
  icon: ElementType;
};

export const LinkButtonIcon = ({ icon: Icon }: TInputIconProps) => {
  return <Icon className="w-5 h-5 stroke-lf-gray-800" />;
};
