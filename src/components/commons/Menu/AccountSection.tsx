import Link from 'next/link';
import { LinkButton } from '../LinkButton';
import { LogIn } from 'lucide-react';

export const AccountSection = () => {
  return (
    <div className="flex flex-col gap-2 animate-fade-in">
      <strong className="text-lf-gray-600">
        Crie ou entre com sua conta para receber diversos benefícios!
      </strong>
      <LinkButton.Root href="/login">
        <span className="font-bold">Entrar</span>
        <LinkButton.Icon icon={LogIn} />
      </LinkButton.Root>
      <span className="text-lf-gray-400 font-light text-sm">
        Ainda não possui conta?{' '}
        <Link href="/cadastrar" className="underline">
          Cadastre-se
        </Link>
      </span>
    </div>
  );
};
