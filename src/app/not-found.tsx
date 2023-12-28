'use client';
import { Button } from '@/components/commons/Button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center mt-24">
      <strong className="text-center">
        Essa página ainda está em desenvolvimento.
        <br />
        Agradecemos sua compreensão.
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
