import { Button } from '@/components/commons/Button';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { ArrowDownAZ } from 'lucide-react';

export const SortOpenButton = () => {
  return (
    <DialogTrigger className="group" asChild>
      <Button
        icon={{
          position: 'left',
          render: ArrowDownAZ,
        }}
        color="transparent"
        className="font-normal gap-3"
      >
        Ordenar
      </Button>
    </DialogTrigger>
  );
};
