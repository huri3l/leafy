import { Button } from '@/components/ui/button';
import { dict } from '@/content/dictionary';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { ArrowDownAZ } from 'lucide-react';

export const SortOpenButton = () => {
  return (
    <DialogTrigger className="group" asChild>
      <Button variant="ghost" className="font-normal gap-3">
        <ArrowDownAZ className="w-5 h-5" />
        {dict('general.sort')}
      </Button>
    </DialogTrigger>
  );
};
