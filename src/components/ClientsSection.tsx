import React from 'react';

export const ClientsSection: React.FC = () => {
  return (
    <section className="flex w-[1080px] max-w-full flex-col items-stretch leading-none ml-[153px] mt-[60px] max-md:mt-10">
      <div className="bg-blend-normal flex min-h-64 gap-[30px] text-[32px] text-[rgba(86,51,208,1)] font-semibold pl-2.5 py-2.5 max-md:max-w-full">
        <div className="bg-blend-normal h-[69px] w-[137px] pt-[74px]">
          <div className="bg-blend-normal flex min-h-[5px] w-[18px] border-t-[5px] border-[rgba(86,51,208,1)]" />
          <h2 className="bg-blend-normal min-h-16 max-w-full w-[137px] mt-[29px] pr-6 max-md:pr-5">
            Nossos clientes
          </h2>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/030302c0964a70e510765e76200c7c713130bfab?placeholderIfAbsent=true"
          alt="Client logos"
          className="aspect-[4] object-contain w-[943px] bg-blend-normal min-w-60 max-md:max-w-full"
        />
      </div>
      <button className="rounded bg-blend-normal bg-[rgba(86,51,208,1)] self-center w-[199px] max-w-full text-base text-white font-medium ml-5 mt-5 px-[30px] py-[15px] max-md:px-5 hover:bg-[rgba(86,51,208,0.9)] transition-colors">
        Ver todos os Cases
      </button>
    </section>
  );
};
