import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, buttonText, buttonColor }) => {
  return (
    <article className="bg-blend-normal flex min-w-60 items-start gap-[40px_81px] flex-wrap w-[530px] pl-[25px] pr-2.5 pt-[22px] pb-[70px] max-md:max-w-full max-md:pl-5">
      <img
        src={icon}
        alt={`${title} icon`}
        className="aspect-[0.98] object-contain w-[50px] bg-blend-normal shrink-0 mt-12 max-md:mt-10"
      />
      <div className="bg-blend-normal h-[92px] grow shrink-0 basis-0 w-fit pt-2.5">
        <h3 className="bg-blend-normal max-w-full w-[362px] text-xl text-black font-semibold whitespace-nowrap leading-none max-md:pr-5">
          {title}
        </h3>
        <p className="bg-blend-normal min-h-[72px] max-w-full w-[362px] text-base text-[rgba(122,122,122,1)] font-normal mt-5 pr-[26px] max-md:pr-5">
          {description}
        </p>
        {buttonText && (
          <button 
            className={`${buttonColor || 'bg-[rgba(97,206,112,1)]'} text-[15px] text-white font-medium leading-none mt-[35px] px-6 py-3 rounded-[3px] max-md:px-5 hover:opacity-90 transition-opacity`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </article>
  );
};

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/94aab08586912c8f1bc51f6b300a11e48ca41183?placeholderIfAbsent=true",
      title: "Tecnologia",
      description: "Somos especialista em softwares, criamos, gerimos e idealizamos junto com você. Agende uma reunião conosco."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/474e38ce47ea810261b59cbe78abeda7646a948f?placeholderIfAbsent=true",
      title: "Gestão",
      description: "Usando técnicas de gestão estratégica, ganhe conforto na tomada de decisão na areá de tecnologia, conheça nossos analistas de requisitos, pwo e scrum master."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/f9f04eb7adc83693766c47c1a5d995a5ad3028cb?placeholderIfAbsent=true",
      title: "Marketing Digital",
      description: "Uma excelente forma de expandir suas vendas e valorizar sua marca. Buscar uma Empresa de Marketing Digital que entenda de tecnologia parece um desafio, por isso nos criamos um Departamento só para atender as demandas do Mercado Digital, Fale com um de nossos Consultores."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/41d720ca38b836191c7fc6a045e976c86b2fe6a6?placeholderIfAbsent=true",
      title: "Terceirização e Hunting",
      description: "Conheça nossa Consultoria de RH. Tenha profissionais qualificados no seu time com a nossa Consultoria Especializada em Recrutamento.",
      buttonText: "Saiba mais",
      buttonColor: "bg-[rgba(97,206,112,1)]"
    }
  ];

  return (
    <section className="bg-blend-normal flex h-[493px] w-[1140px] max-w-full flex-col mt-[35px] pt-2.5 px-2.5">
      <div className="bg-blend-normal flex min-h-[210px] w-[1060px] max-w-full gap-10 pl-2.5 py-2.5">
        <ServiceCard {...services[0]} />
        <ServiceCard {...services[1]} />
      </div>
      <div className="bg-blend-normal flex min-h-[282px] w-[1060px] max-w-full gap-10 mt-5 pl-2.5 py-2.5">
        <ServiceCard {...services[2]} />
        <ServiceCard {...services[3]} />
      </div>
    </section>
  );
};
