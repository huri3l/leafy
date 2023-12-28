import { ReactNode } from 'react';
import { DesktopWarning } from './DesktopWarning';

type DeviceHandlerProps = {
  children: ReactNode;
};

export const DeviceHandler = ({ children }: DeviceHandlerProps) => {
  return (
    <>
      <div className="md:hidden">{children}</div>
      <div className="hidden md:flex">
        <DesktopWarning />
      </div>
    </>
  );
};
