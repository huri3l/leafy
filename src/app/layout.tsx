import { Footer } from '@/components/commons/footer';
import { Header } from '@/components/commons/header';
import { DeviceHandler } from '@/components/commons/device-handler';
import { Metadata } from 'next';
import { defaultMeta, defaultViewport } from '@/static/metadata';
import './globals.css';

export const metadata: Metadata = defaultMeta;
export const viewport = defaultViewport;

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
