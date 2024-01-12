import { Button } from '@/components/commons/Button';
import { dict } from '@/content/dictionary';
import { PrismicRichText } from '@prismicio/react';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center mt-24">
      <PrismicRichText field={dict('not-found')} />
      <Link href="/">
        <Button
          icon={{
            render: Home,
            position: 'left',
          }}
        >
          {dict('general.back')}
        </Button>
      </Link>
    </main>
  );
}
