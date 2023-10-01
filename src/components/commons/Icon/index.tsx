import { LucideProps, icons } from 'lucide-react';

export type IconName = keyof typeof icons;

type TIconProps = LucideProps & {
  name: IconName;
};

export const Icon = ({ name, ...props }: TIconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};
