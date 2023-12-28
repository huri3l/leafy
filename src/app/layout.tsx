import { Footer } from '@/components/Footer';
import { Header } from '@/components/commons/Header';
import type { Metadata } from 'next';
import './globals.css';
import { DeviceHandler } from '@/components/commons/DeviceHandler';

export const metadata: Metadata = {
  title: 'Leafy',
  description: 'Sua e-loja de plantinhas!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-lf-gray-100 text-lf-gray-800 min-h-screen flex flex-col justify-between">
        <DeviceHandler>
          <div>
            <Header />
            <div>{children}</div>
          </div>
          <Footer />
        </DeviceHandler>
      </body>
    </html>
  );
}
