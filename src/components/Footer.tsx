import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const socialLinks = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/2391f6a2086f04980e47c4ae5c372ad1cfeee11f?placeholderIfAbsent=true", alt: "Facebook", url: "#" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/682d4ac7b48061fb5aedfcc7703d5a6b4122b6a1?placeholderIfAbsent=true", alt: "Instagram", url: "#" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/73c1f40725b749a86b6bd8c57e545c8935f43bc4?placeholderIfAbsent=true", alt: "LinkedIn", url: "#" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/415f6405b01f3fec0e04f66eff058768b6cf9acb?placeholderIfAbsent=true", alt: "Twitter", url: "#" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/607e111d16afbd3402a99757d2087f58b9cbe047?placeholderIfAbsent=true", alt: "YouTube", url: "#" }
  ];

  const menuItems = [
    { label: "Home", url: "#" },
    { label: "Programa de Estágio", url: "#" },
    { label: "Trabalhe Conosco", url: "#" },
    { label: "Cases", url: "#" }
  ];

  return (
    <footer className="bg-blend-normal bg-[rgba(86,51,208,1)] flex w-full max-w-[1425px] flex-col px-[70px] max-md:max-w-full max-md:px-5">
      <div className="bg-blend-normal flex min-h-[518px] gap-10 pl-2.5 py-[60px]">
        <div className="bg-blend-normal min-w-60 h-[190px] w-[347px] pt-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/12c740a5be3ad1a65290637b93a646e3ff9ce482?placeholderIfAbsent=true"
            alt="ÜpBase Logo"
            className="aspect-[2.62] object-contain w-[178px] bg-blend-normal max-w-full"
          />
          <div className="bg-blend-normal flex max-w-full w-[347px] items-stretch gap-[5px] mt-5 pr-[69px] max-md:pr-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-blend-normal bg-[rgba(110,193,228,0)] flex-1 pt-[211px] px-2.5 rounded-[5px] hover:bg-[rgba(110,193,228,0.1)] transition-colors max-md:pt-[100px]"
                aria-label={social.alt}
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="aspect-[1] object-contain w-[25px] bg-blend-normal"
                />
              </a>
            ))}
          </div>
          <div className="bg-blend-normal h-[72px] max-w-full w-[347px] text-base text-white mt-5 pr-px py-px">
            <p className="font-bold">
              Unindo Pessoas à Tecnologia, e a Tecnologia as Pessoas.
            </p>
            <p className="font-normal mt-[17px]">
              (13) 99731-8796
            </p>
          </div>
        </div>
        
        <nav className="bg-blend-normal min-w-60 h-[100px] text-xl text-white font-light leading-none w-[347px] pt-2.5">
          <h3 className="bg-blend-normal max-w-full w-[347px] font-semibold whitespace-nowrap max-md:pr-5">
            Menu
          </h3>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="bg-blend-normal max-w-full w-[347px] block mt-5 hover:text-gray-300 transition-colors max-md:pr-5"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="bg-blend-normal min-w-60 text-[15px] text-[rgba(122,122,122,1)] w-[347px] py-2.5">
          <div className="bg-blend-normal min-h-12 text-base text-white">
            <p>
              <span className="font-bold">Fale Conosco.</span>
              <span className="font-normal"> Deixe seu contato e ligaremos para você.</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-[35px] space-y-2.5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nome"
              required
              className="bg-blend-normal bg-white border overflow-hidden font-normal leading-[1.2] w-full px-4 py-[11px] rounded-[3px] border-[rgba(105,114,125,1)] border-solid text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="bg-blend-normal bg-white border overflow-hidden font-normal leading-[1.2] w-full px-4 py-[11px] rounded-[3px] border-[rgba(105,114,125,1)] border-solid text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(DD) 00000-0000"
              required
              className="bg-blend-normal bg-white border overflow-hidden font-normal leading-[1.2] w-full px-4 py-[11px] rounded-[3px] border-[rgba(105,114,125,1)] border-solid text-black focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Deixe aqui sua mensagem"
              required
              rows={4}
              className="bg-blend-normal bg-white border overflow-hidden font-normal leading-[1.2] w-full px-3.5 py-[11px] rounded-[3px] border-[rgba(105,114,125,1)] border-solid text-black resize-none focus:outline-none focus:border-[rgba(86,51,208,1)] transition-colors"
            />
            <button
              type="submit"
              className="bg-blend-normal bg-[rgba(97,206,112,1)] text-white font-medium whitespace-nowrap leading-none px-[35px] py-[13px] rounded-[3px] hover:bg-[rgba(97,206,112,0.9)] transition-colors max-md:px-5"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-blend-normal bg-[rgba(14,0,65,1)] w-full text-[15px] text-white font-semibold leading-none px-[70px] py-[45px] max-md:px-5">
        Todos os Direitos Reservados © Upbase - 2023
      </div>
    </footer>
  );
};
