import { Footer } from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import { DeviceHandler } from '@/components/commons/DeviceHandler';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leafy',
  description: 'Sua e-loja de plantinhas!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-lf-gray-100 text-lf-gray-800 min-h-screen flex flex-col justify-between">
        <DeviceHandler className="flex flex-col justify-between min-h-screen">
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
