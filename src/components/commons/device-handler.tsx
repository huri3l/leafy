import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { PrismicRichText } from '@prismicio/react';
import { dict } from '@/content/dictionary';
import { LeafyGridded } from './leafy-icons';

type DeviceHandlerProps = {
  className?: string;
  children: ReactNode;
};

export const DeviceHandler = ({ className, children }: DeviceHandlerProps) => {
  return (
    <>
      <div className={cn(className, 'md:hidden')}>{children}</div>
      <div className="hidden md:flex">
        <div className="flex flex-col w-full justify-center items-center px-64">
          <LeafyGridded />
          <PrismicRichText
            field={dict('desktop-warning')}
            components={{
              heading6: ({ children }) => <strong className="text-2xl mb-10">{children}</strong>,
              paragraph: ({ children }) => <p className="text-xl text-center mb-8">{children}</p>,
            }}
          />
        </div>
      </div>
    </>
  );
};
