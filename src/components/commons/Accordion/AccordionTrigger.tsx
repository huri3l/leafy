import { cn } from '@/sdk/lib/style';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';

export const AccordionTrigger = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={cn('AccordionTrigger group', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDown
          className="AccordionChevron stroke-lf-gray-400 w-5 h-5 group-data-[state=open]:rotate-180 transition-transform"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';
