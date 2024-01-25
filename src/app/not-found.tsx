import { Button } from '@/components/ui/button';
import { dict } from '@/content/dictionary';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center mt-24">
      <PrismicRichText field={dict('not-found')} />
      <Link href="/">
        <Button>{dict('general.goHome')}</Button>
      </Link>
    </main>
  );
}
