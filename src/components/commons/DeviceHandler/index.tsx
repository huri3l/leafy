import { ReactNode } from 'react';
import { DesktopWarning } from './DesktopWarning';
import { cn } from '@/lib/style';

type DeviceHandlerProps = {
  className?: string;
  children: ReactNode;
};

export const DeviceHandler = ({ className, children }: DeviceHandlerProps) => {
  return (
    <>
      <div className={cn(className, 'md:hidden')}>{children}</div>
      <div className="hidden md:flex">
        <DesktopWarning />
      </div>
    </>
  );
};
