import React from 'react';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="flex w-[1262px] max-w-full flex-col ml-5 mt-[60px] max-md:mt-10">
      <div className="flex w-[1053px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <div className="bg-blend-normal bg-[rgba(3,173,11,1)] shadow-[0px_0px_9px_rgba(0,0,0,0.3)] text-[15px] text-white font-bold leading-loose mt-1 px-5 py-[5px]">
          Translate »
        </div>
        <div className="flex flex-col items-center text-base text-[rgba(122,122,122,1)] font-normal max-md:max-w-full">
          <h2 className="text-[rgba(86,51,208,1)] text-[34px] font-medium leading-none self-stretch max-md:max-w-full">
            Transforme sua Empresa em fonte de Inovação Tecnologica
          </h2>
          <p className="mt-[19px] max-md:max-w-full text-center">
            A ÜpBase tem se consolidado INOVAÇÃO como uma das principais 
            Empresas de Tecnologia da Informação e Transformação Digital no Brasil. 
            Com uma abordagem 360°, nosso foco é oferecer soluções Inovadoras e de 
            alta qualidade para atender nossos Clientes de forma completa e orientada 
            para o Futuro.
          </p>
        </div>
      </div>
    </section>
  );
};
