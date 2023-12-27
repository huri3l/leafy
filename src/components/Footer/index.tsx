import { Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-lf-gray-900 text-white mt-12 flex flex-col items-center py-8 gap-4">
      <div className="flex flex-col items-center gap-4">
        <strong className="text-2xl">Leafy</strong>
        <p className="text-center text-lf-gray-100">
          Todas as plantas para <br />
          <strong>você</strong>
        </p>
      </div>
      {/* <div className="flex gap-3 items-center">
        <Instagram className="h-7 w-7" />
        <Youtube className="h-9 w-9" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <strong>Contato</strong>
        <ul className="text-lf-gray-100 text-center space-y-1">
          <li>E-mail</li>
          <li>WhatsApp</li>
        </ul>
      </div> */}
    </footer>
  );
};
