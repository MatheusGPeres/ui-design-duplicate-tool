import React from 'react';

interface ServiceShowcaseItemProps {
  image: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const ServiceShowcaseItem: React.FC<ServiceShowcaseItemProps> = ({ 
  image, 
  title, 
  description, 
  imagePosition 
}) => {
  return (
    <article className="bg-blend-normal flex min-h-[305px] gap-5 mr-[21px] mt-5 py-2.5 max-md:max-w-full max-md:mr-2.5">
      {imagePosition === 'left' && (
        <img
          src={image}
          alt={title}
          className="aspect-[1.5] object-contain w-[428px] bg-blend-normal min-w-60 max-md:max-w-full"
        />
      )}
      <div className="bg-blend-normal min-w-60 h-[69px] w-[672px] pt-2.5 px-2.5 max-md:max-w-full">
        <h3 className="bg-blend-normal max-w-full w-[652px] text-[21px] text-[rgba(28,28,28,1)] font-semibold leading-none max-md:max-w-full max-md:pr-5">
          {title}
        </h3>
        <p className="bg-blend-normal min-h-12 max-w-full w-[652px] text-base text-[rgba(122,122,122,1)] font-normal mt-5 pr-9 max-md:pr-5">
          {description}{" "}
          <span className="text-[rgba(204,51,102,1)] cursor-pointer hover:underline">
            Saiba mais.
          </span>
        </p>
      </div>
      {imagePosition === 'right' && (
        <img
          src={image}
          alt={title}
          className="aspect-[1.5] object-contain w-[428px] bg-blend-normal min-w-60 max-md:max-w-full"
        />
      )}
    </article>
  );
};

export const ServiceShowcase: React.FC = () => {
  const showcaseItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/8071be16a7da702a0318de1051b99627a7286497?placeholderIfAbsent=true",
      title: "Consultoria em Tecnologia da Informação",
      description: "Assessoria Estratégica para Empresas tomarem decisões assertivas relacionadas à Tecnologia com auxilio da nossa Fábrica de Software e Equipe de Gestão.",
      imagePosition: 'left' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/a279e6f173936afe693e3e0ff7b8582023013173?placeholderIfAbsent=true",
      title: "A ÜpBase oferece uma ampla gama de Soluções e Serviços Especializados",
      description: "Programas de Formação para capacitar Equipes em novas Ferramentas e tendências do Mercado.",
      imagePosition: 'right' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/9caf579c0a2965586547e0e542f7f9e55ab6b586?placeholderIfAbsent=true",
      title: "Gestão Estratégica de Projetos de Tecnologia",
      description: "Liderança e Coordenação de Projetos para garantir a Eficiência e Resultados Positivos.",
      imagePosition: 'right' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/ecd3802f4344d908cf2e1804901ecef0b0235a55?placeholderIfAbsent=true",
      title: "Conheça mais sobre nossas Integrações de Softwares",
      description: "Entenda como Integrar Softwares pode proporcionar vantagens Competitivas para o seu Negócio.",
      imagePosition: 'left' as const
    }
  ];

  return (
    <section className="flex w-[1121px] max-w-full flex-col items-stretch ml-[153px] mt-[21px]">
      <h2 className="text-[rgba(86,51,208,1)] text-[32px] font-semibold leading-none ml-[22px] mr-[23px] max-md:max-w-full max-md:mr-2.5">
        A ÜpBase oferece uma ampla gama de Soluções e Serviços Especializados
      </h2>
      <p className="text-[rgba(122,122,122,1)] text-base font-normal mt-[19px] max-md:max-w-full">
        Nossa Experiência e Comprometimento garantem Resultados excepcionais. Priorizamos a Responsabilidade Social e a 
        Sustentabilidade, agregando valor aos Negócios.{" "}
        <span className="font-bold">
          Conte conosco para impulsionar o Crescimento da sua Empresa.
        </span>
      </p>
      
      <div className="bg-blend-normal flex min-h-64 w-[1020px] max-w-full gap-10 mt-[35px] pl-2.5 py-2.5">
        <ServiceShowcaseItem {...showcaseItems[0]} />
      </div>
      
      {showcaseItems.slice(1).map((item, index) => (
        <ServiceShowcaseItem key={index + 1} {...item} />
      ))}
    </section>
  );
};
