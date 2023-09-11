import * as Accordion from '@radix-ui/react-accordion';
import { Icon, IconName } from '../Icon';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TMenuOption {
  icon: IconName;
  name: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

export const MenuOption = ({ subItems, ...props }: TMenuOption) => {
  return !!subItems ? (
    <CollapsibleMenuOption subItems={subItems} {...props} />
  ) : (
    <SimpleMenuOption {...props} />
  );
};

const SimpleMenuOption = ({ icon, name }: TMenuOption) => {
  return (
    <div className="flex gap-2.5 items-center my-2 cursor-pointer">
      <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
      <span className="text-lf-gray-600 text-lg">{name}</span>
    </div>
  );
};

const CollapsibleMenuOption = ({ icon, name, subItems }: TMenuOption) => {
  console.log(subItems);
  return (
    <div>
      <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center my-2 cursor-pointer">
        <div className="flex gap-2.5 items-center">
          <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
          <span className="text-lf-gray-600 text-lg">{name}</span>
        </div>
        {/* <ChevronDown className="w-5 h-5" /> */}
      </AccordionTrigger>
      <AccordionContent>
        {subItems?.map(({ label, link }, idx) => (
          <div>{label}</div>
        ))}
      </AccordionContent>
    </div>
  );
};

const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger className={cn('AccordionTrigger', className)} {...props} ref={forwardedRef}>
      {children}
      <ChevronDown
        className="AccordionChevron data-[state=open]:rotate-180 transition-transform"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content className={cn('AccordionContent', className)} {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
