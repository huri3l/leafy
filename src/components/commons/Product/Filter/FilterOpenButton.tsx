import { Button } from '@/components/ui/button';
import { dict } from '@/content/dictionary';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Filter } from 'lucide-react';

export const FilterOpenButton = () => {
  return (
    <DialogTrigger className="group" asChild>
      <Button variant="ghost" className="font-normal gap-3">
        <Filter className="w-5 h-5" />
        {dict('general.filter')}
      </Button>
    </DialogTrigger>
  );
};
