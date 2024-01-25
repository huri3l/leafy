import { Icon, IconName } from '../icon';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SheetClose } from '@/components/ui/sheet';

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

type TMenuOptionsContainerProps = {
  items: TMenuOption[];
};

export const MenuOptionsContainer = ({ items }: TMenuOptionsContainerProps) => {
  return (
    <Accordion type="single" collapsible>
      {items.map(({ icon, name, subItems, link }, idx) => (
        <AccordionItem key={name + idx} value={`item-${idx}`}>
          <MenuOption key={name + idx} icon={icon} name={name} subItems={subItems} link={link} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const MenuOption = ({ subItems, ...props }: TMenuOption) => {
  return !!subItems ? (
    <CollapsibleMenuOption subItems={subItems} {...props} />
  ) : (
    <SimpleMenuOption {...props} />
  );
};

const SimpleMenuOption = ({ icon, name, link }: TMenuOption) => {
  return (
    <SheetClose asChild>
      <Link
        href={link?.url ?? ''}
        className="flex gap-2.5 items-center my-2 cursor-pointer"
        target={link?.target}
      >
        <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
        <span className="text-lf-gray-600 text-lg">{name}</span>
      </Link>
    </SheetClose>
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
              <SheetClose key={label + idx} asChild>
                <Link
                  href={link?.url ?? ''}
                  className="text-lf-gray-600 text-base"
                  target={link?.target}
                >
                  {label}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </AccordionContent>
    </div>
  );
};
