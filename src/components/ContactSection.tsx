import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section className="bg-blend-normal min-h-[951px] w-[1425px] max-w-full mt-5">
      <div className="flex flex-col bg-blend-normal relative min-h-[327px] w-full items-center text-white px-[41px] py-[60px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/1b14be22b3380a1775f5b5acef51e41f10b8186a?placeholderIfAbsent=true"
          alt="Team background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <h2 className="relative text-[32px] font-semibold leading-none">
          Equipe ÜpBase
        </h2>
        <p className="relative text-[25px] font-normal self-stretch mt-5 max-md:max-w-full text-center">
          Estamos prontos para impulsionar o Sucesso do seu Negócio. Conte conosco para encontrar Soluções Tecnológicas sob medida.
        </p>
        <button className="relative rounded bg-blend-normal bg-white w-[321px] max-w-full text-base text-[rgba(86,51,208,1)] font-medium leading-none mt-[71px] px-[30px] py-[15px] max-md:mt-10 max-md:px-5 hover:bg-gray-100 transition-colors">
          Fale com um de Nossos Consultores
        </button>
      </div>
    </section>
  );
};
