
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
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
      {imagePosition === 'left' && (
        <img
          src={image}
          alt={title}
          className="w-full object-contain rounded-lg"
        />
      )}
      <div className={imagePosition === 'right' ? 'lg:order-2' : ''}>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {title}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
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
          className="w-full object-contain rounded-lg lg:order-1"
        />
      )}
    </article>
  );
};

export const ServiceShowcase: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section id="cases" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[rgba(86,51,208,1)] mb-6">
          A ÜpBase oferece uma ampla gama de Soluções e Serviços Especializados
        </h2>
        <p className="text-base text-gray-600 mb-12 leading-relaxed">
          Nossa Experiência e Comprometimento garantem Resultados excepcionais. Priorizamos a Responsabilidade Social e a 
          Sustentabilidade, agregando valor aos Negócios.{" "}
          <span className="font-bold">
            Conte conosco para impulsionar o Crescimento da sua Empresa.
          </span>
        </p>
        
        <div className="space-y-8 mb-12">
          {showcaseItems.map((item, index) => (
            <ServiceShowcaseItem key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[rgba(86,51,208,1)] text-white text-base font-medium px-8 py-4 rounded hover:bg-[rgba(86,51,208,0.9)] transition-colors">
            Ver todos os Cases
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-white border-2 border-[rgba(86,51,208,1)] text-[rgba(86,51,208,1)] text-base font-medium px-8 py-4 rounded hover:bg-[rgba(86,51,208,1)] hover:text-white transition-colors"
          >
            Contato
          </button>
        </div>
      </div>
    </section>
  );
};
