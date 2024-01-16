import { MenuOption, TMenuOption } from './MenuOption';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

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
