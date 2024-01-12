import Link from 'next/link';
import { LinkButton } from '../LinkButton';
import { LogIn } from 'lucide-react';
import { PrismicRichText } from '@prismicio/react';
import { dict } from '@/content/dictionary';

export const AccountSection = () => {
  return (
    <div className="flex flex-col gap-2 animate-fade-in">
      <strong className="text-lf-gray-600">{dict('menu.account.loggedOut.title')}</strong>
      <LinkButton.Root href="/login">
        <span className="font-bold">Entrar</span>
        <LinkButton.Icon icon={LogIn} />
      </LinkButton.Root>
      <PrismicRichText
        field={dict('menu.account.loggedOut.hint')}
        components={{
          hyperlink: ({ text }) => (
            <Link href="/cadastrar" className="underline">
              {text}
            </Link>
          ),
        }}
      />
      <span className="text-lf-gray-400 font-light text-sm">Ainda não possui conta? </span>
    </div>
  );
};
