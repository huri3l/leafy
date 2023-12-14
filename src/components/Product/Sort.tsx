import { ArrowDownAZ } from 'lucide-react';
import { Button } from '../commons/Button';

export const Sort = () => {
  return (
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
  );
};
