import { Button } from '@/components/ui/button';
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer';
import { dict } from '@/content/dictionary';
import { useSort } from '@/hooks/useSort';

export const SortFooter = () => {
  const { removeSortOption } = useSort();

  return (
    <DrawerFooter className="w-full p-4 bg-white drop-shadow-2xl border-t justify-center items-center gap-4">
      <DrawerClose asChild>
        <Button variant="outline" className="w-28" onClick={removeSortOption}>
          {dict('general.clean')}
        </Button>
      </DrawerClose>
      <Button className="w-28" type="submit">
        {dict('general.sort')}
      </Button>
    </DrawerFooter>
  );
};
