import { Icon, IconName } from '../Icon';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';
import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion';

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
      <AccordionContent className="flex gap-2.5">
        <div className="flex flex-col pt-2 gap-0.5">
          {subItems?.map(({ label, link }, idx) => {
            return (
              <DialogClose key={label + idx} asChild>
                <Link
                  href={link?.url ?? ''}
                  className="text-lf-gray-600 text-base"
                  target={link?.target}
                >
                  {label}
                </Link>
              </DialogClose>
            );
          })}
        </div>
      </AccordionContent>
    </div>
  );
};
