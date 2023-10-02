'use client';
import { Button } from '@/components/commons/Button';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  router.push('/em-desenvolvimento');

  return (
    <main className="flex flex-col gap-6 justify-center items-center mt-24">
      <strong className="text-center">
        Esta página não existe. Clique no botão abaixo para retornar para a Página Inicial
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
