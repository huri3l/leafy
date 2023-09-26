import './globals.css';
import { Header } from '@/components/commons/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500', '700'] });

export const metadata: Metadata = {
  title: 'Leafy',
  description: 'Sua e-loja de plantinhas!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={cn('bg-lf-gray-100', poppins.className)}>
        <Header />
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
