import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export type IconName = keyof typeof dynamicIconImports;

type IconProps = LucideProps & {
  name: IconName;
};

export const DynamicIcon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return (
    <Suspense fallback={<p>Loading..</p>}>
      <LucideIcon {...props} />
    </Suspense>
  );
};
