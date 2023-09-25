import { MenuOption, TMenuOption } from './MenuOption';
import * as Accordion from '@radix-ui/react-accordion';

interface MenuOptionsContainerProps {
  items: TMenuOption[];
}

export const MenuOptionsContainer = ({ items }: MenuOptionsContainerProps) => {
  const normalizeItems = () => {
    return items.map((item, idx) => {
      return {
        ...item,
        isLast: idx === items.length - 1,
      };
    });
  };

  const normalizedItems = normalizeItems();

  return (
    <Accordion.Root className="AccordionRoot" type="single" collapsible>
      {normalizedItems.map(({ icon, name, subItems, isLast }, idx) => (
        <Accordion.Item key={name + idx} value={`item-${idx}`}>
          <MenuOption key={name + idx} icon={icon} name={name} subItems={subItems} />
          {!isLast && <hr className="border-0.25 border-lf-gray-200 w-32 mx-auto" />}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
