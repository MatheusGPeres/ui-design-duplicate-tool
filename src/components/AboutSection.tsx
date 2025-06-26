import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col bg-blend-normal relative min-h-[469px] w-[1425px] max-w-full items-center mt-[100px] pt-[54px] pb-[89px] px-[70px] max-md:mt-10 max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/de26afe9618b4e636d1417904e9939256f69a67b?placeholderIfAbsent=true"
        alt="About us background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative w-[1071px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[82%] max-md:w-full max-md:ml-0">
            <div className="relative grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/58f135a5e9eef208d5decb2d1df7d1eefbff6a87?placeholderIfAbsent=true"
                    alt="About us illustration"
                    className="aspect-[1.04] object-contain w-full bg-blend-normal mt-[53px] max-md:mt-10"
                  />
                </div>
                <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="relative flex grow flex-col items-center text-white max-md:max-w-full max-md:mt-[31px]">
                    <div className="bg-blend-normal flex w-[69px] shrink-0 h-[5px] border-t-[5px] border-white" />
                    <h2 className="text-[32px] font-semibold leading-none mt-[29px]">
                      Sobre nós
                    </h2>
                    <div className="bg-blend-normal self-stretch h-60 text-base mt-5 max-md:max-w-full">
                      <div className="bg-blend-normal flex w-full max-w-[530px] flex-col items-stretch px-2 max-md:max-w-full">
                        <p className="font-normal ml-[30px] mr-8 max-md:max-w-full max-md:mr-2.5">
                          ÜpBase é uma{" "}
                          <span className="font-bold text-white">
                            Consultoria Digital
                          </span>{" "}
                          dedicada a oferecer soluções Inovadoras em{" "}
                          <span className="font-bold">
                            Tecnologia, Gestão Estratégica de Tecnologias, Pessoas (RH) e Marketing Digital.
                          </span>
                        </p>
                        <p className="font-normal mt-3.5">
                          Com uma Equipe Comprometida com Resultados e Inovação nosso 
                          Serviços abrangem desde o Desenvolvimento Personalizado de Software 
                          até Consultoria de LGPD e Conformidade com a Segurança da Informação.
                        </p>
                        <p className="font-normal mt-3.5">
                          Nossa atuação se estende a diferentes Setores conectando Profissionais 
                          talentosos a grande Projetos e Clientes buscando sempre otimizar e 
                          apoiar as operações de Tecnologia e de Negócios dos nossos parceiros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[18%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/3789300e58ed5a0b320b4b408bd77115fdc6777f?placeholderIfAbsent=true"
              alt="Decorative element"
              className="aspect-[2.62] object-contain w-[178px] bg-blend-normal shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
