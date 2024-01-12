import { Button } from '@/components/commons/Button';
import { dict } from '@/content/dictionary';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Filter } from 'lucide-react';

export const FilterOpenButton = () => {
  return (
    <DialogTrigger className="group" asChild>
      <Button
        icon={{
          position: 'left',
          render: Filter,
        }}
        color="transparent"
        className="font-normal gap-3"
      >
        {dict('general.filter')}
      </Button>
    </DialogTrigger>
  );
};
