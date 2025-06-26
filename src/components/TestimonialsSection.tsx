import React from 'react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, company, content }) => {
  return (
    <article className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-[rgba(86,51,208,1)] font-semibold text-center mb-1">
        {name} - {position}
      </h3>
      <p className="text-[rgba(140,140,140,1)] text-sm text-center mb-6">
        {company}
      </p>
      <blockquote className="text-[rgba(51,51,51,1)] text-base leading-relaxed">
        {content}
      </blockquote>
    </article>
  );
};

export const TestimonialsSection: React.FC = () => {
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
    <section className="w-full bg-[rgba(244,241,255,1)] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-[rgba(86,51,208,1)] font-semibold text-center mb-4">
          Depoimentos
        </h2>
        <p className="text-[rgba(122,122,122,1)] text-center mb-12">
          Acompanhe o que estão falando da gente por ai.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
