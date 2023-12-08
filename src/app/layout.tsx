import { Footer } from '@/components/Footer';
import './globals.css';
import { Header } from '@/components/commons/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Leafy',
  description: 'Sua e-loja de plantinhas!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'bg-lf-gray-100 text-lf-gray-800 min-h-screen flex flex-col justify-between',
          poppins.className,
        )}
      >
        <div>
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
