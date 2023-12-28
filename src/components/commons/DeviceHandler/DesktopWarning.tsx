import { GriddedLeafy } from '@/assets/icons';

export const DesktopWarning = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-64">
      <GriddedLeafy />
      <h1 className="font-bold text-2xl mb-10">O Leafy ainda está em desenvolvimento</h1>
      <p className="text-xl text-center">
        Nossa equipe está trabalhando ao máximo para entregar uma versão do Leafy para você acessar
        no seu notebook ou PC.
        <br />
        <br />
        <strong>Entretanto, o site só está disponível em dispositivos móveis.</strong>
        <br />
        <br />
        Pedimos que acesse-o em um celular ou ajuste as dimensões do seu navegador para o mesmo
        tamanho de um dispositivo móvel.
        <br />
        <br />
        Agradecemos sua compreensão.
      </p>
    </div>
  );
};
