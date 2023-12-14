import * as Accordion from '@radix-ui/react-accordion';
import { Icon, IconName } from '../Icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AccordionTrigger } from '../Accordion/AccordionTrigger';

export type TMenuOption = {
  icon: IconName;
  name: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
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
    <Link href={link ?? ''} className="flex gap-2.5 items-center my-2 cursor-pointer">
      <Icon name={icon} className="stroke-lf-gray-400 w-6 h-6" />
      <span className="text-lf-gray-600 text-lg">{name}</span>
    </Link>
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
          {subItems?.map(({ label, link }, idx) => (
            <Link href={link} key={label + idx} className="text-lf-gray-600">
              {label}
            </Link>
          ))}
        </div>
      </Accordion.Content>
    </div>
  );
};
