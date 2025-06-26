import React, { useState } from 'react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, company, content }) => {
  return (
    <article className="bg-blend-normal bg-white flex min-w-60 flex-col overflow-hidden items-stretch w-[364px] pt-[19px] pb-[141px] px-[22px] rounded-[10px] max-md:pb-[100px] max-md:px-5">
      <h3 className="text-[rgba(86,51,208,1)] font-semibold self-center">
        {name} - {position}
      </h3>
      <p className="text-[rgba(140,140,140,1)] text-sm self-center mt-1">
        {company}
      </p>
      <blockquote className="mt-8 text-[rgba(51,51,51,1)] text-base">
        {content}
      </blockquote>
    </article>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Gabriella Schema",
      position: "RH",
      company: "Raize do Brasil",
      content: "Optamos sempre por uma parceria concreta e de alta qualidade, Por isso, escolhemos a ÜpBase. Uma empresa que valoriza o cliente, apoiando e incentivando nossos projetos."
    },
    {
      name: "Armando Pizt",
      position: "T.I",
      company: "BMW do Brasil",
      content: "Tivemos uma ótima experiência com a ÜpBase, executando um serviço de excelência. Desde a seleção dos profissionais até a fase de alocação destes. Durante o período que utilizamos os serviços, sempre tivemos um acompanhamento de perto, com envios periódicos de relatórios, e adaptações sempre que necessário, buscando um progresso contínuo."
    }
  ];

  return (
    <section className="bg-blend-normal bg-[rgba(244,241,255,1)] flex w-[1425px] max-w-full flex-col items-center text-base font-normal mt-[60px] pb-40 px-20 max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <div className="bg-blend-normal h-[423px] w-[1140px] max-w-full -mb-8 pt-[60px] max-md:mb-2.5">
        <h2 className="bg-blend-normal w-full text-[32px] text-[rgba(86,51,208,1)] font-semibold whitespace-nowrap leading-none px-[70px] max-md:px-5">
          Depoimentos
        </h2>
        <p className="bg-blend-normal w-full text-[rgba(122,122,122,1)] mt-5 pb-[15px] px-[70px] max-md:px-5">
          Acompanhe o que estão falando da gente por ai.
        </p>
        <div className="bg-blend-normal flex w-full max-w-[1140px] flex-col overflow-hidden items-center text-[rgba(51,51,51,1)] mt-5 px-[70px] max-md:max-w-full max-md:px-5">
          <div className="bg-blend-normal flex min-h-[353px] w-[728px] max-w-full gap-4 pl-2 py-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
