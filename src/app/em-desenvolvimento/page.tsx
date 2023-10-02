import { GriddedLeafy } from '@/assets/icons';
import { Button } from '@/components/commons/Button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function UnderDevelopment() {
  return (
    <main className="mt-2 flex flex-col gap-3 items-center text-center text-lf-gray-800">
      <GriddedLeafy className="w-full" />
      <strong className="text-2xl text-lf-gray-900 mb-10">Página em desenvolvimento</strong>
      <p>
        Nosso time está trabalhando o máximo possível para finalizar essa página. <br /> Pedimos sua
        paciência e agradecemos sua comprenssão.
      </p>
      <span>Por gentileza, retorne para a Página Inicial clicando no botão abaixo.</span>
      <Link href="/">
        <Button
          icon={{
            render: Home,
            position: 'left',
          }}
        >
          Voltar
        </Button>
      </Link>
    </main>
  );
}
