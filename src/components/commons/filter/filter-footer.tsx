import { Button } from '@/components/ui/button';
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer';
import { dict } from '@/content/dictionary';
import { useFilter } from '@/hooks/useFilter';

export const FilterFooter = () => {
  const { removeAllFilters } = useFilter();

  return (
    <DrawerFooter className="w-full p-4 bg-white drop-shadow-2xl border-t justify-center items-center">
      <DrawerClose asChild>
        <Button variant="outline" className="w-28" onClick={removeAllFilters}>
          {dict('general.clean')}
        </Button>
      </DrawerClose>
      <Button className="w-28" type="submit">
        {dict('general.filter')}
      </Button>
    </DrawerFooter>
  );
};
