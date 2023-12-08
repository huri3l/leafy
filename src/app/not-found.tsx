'use client';
import { Button } from '@/components/commons/Button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center mt-24">
      <strong className="text-center">
        Não encontramos essa página. Clique no botão abaixo para retornar para a Página Inicial
      </strong>
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
