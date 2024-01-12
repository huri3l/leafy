import * as Accordion from '@radix-ui/react-accordion';
import { Icon, IconName } from '../Icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AccordionTrigger } from '../Accordion/AccordionTrigger';
import { HTMLAttributeAnchorTarget } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';

type LinkType = {
  url: string;
  target?: HTMLAttributeAnchorTarget;
};

export type TMenuOption = {
  icon: IconName;
  name: string;
  link?: LinkType;
  subItems?: {
    label: string;
    link: LinkType;
  }[];
};

export const MenuOption = ({ subItems, ...props }: TMenuOption) => {
  return !!subItems ? (
    <CollapsibleMenuOption subItems={subItems} {...props} />
  ) : (
    <SimpleMenuOption {...props} />
  );
};

const SimpleMenuOption = ({ icon, name, link }: TMenuOption) => {
  return (
    <DialogClose asChild>
      <Link
        href={link?.url ?? ''}
        className="flex gap-2.5 items-center my-2 cursor-pointer"
        target={link?.target}
      >
        <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
        <span className="text-lf-gray-600 text-lg">{name}</span>
      </Link>
    </DialogClose>
  );
};

const CollapsibleMenuOption = ({ icon, name, subItems }: TMenuOption) => {
  return (
    <div className="my-2">
      <AccordionTrigger className="w-full flex gap-2.5 justify-between items-center cursor-pointer">
        <div className="flex gap-2.5 items-center">
          <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
          <span className="text-lf-gray-600 text-lg">{name}</span>
        </div>
      </AccordionTrigger>
      <Accordion.Content
        className={cn('AccordionContent', 'flex gap-2.5 animate-expand-bottom-full')}
      >
        <div className="self-stretch w-6 pt-2">
          <div className="bg-lf-gray-300 w-0.5 h-full mx-auto" />
        </div>
        <div className={cn('AccordionContentText', 'flex flex-col pt-2 gap-0.5')}>
          {subItems?.map(({ label, link }, idx) => {
            return (
              <DialogClose key={label + idx} asChild>
                <Link href={link?.url ?? ''} className="text-lf-gray-600" target={link?.target}>
                  {label}
                </Link>
              </DialogClose>
            );
          })}
        </div>
      </Accordion.Content>
    </div>
  );
};
