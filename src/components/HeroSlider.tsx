import React, { useState, useEffect } from 'react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      backgroundImage: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/5e06c580b22d99daec72f3a9e566bc76140cd82e?placeholderIfAbsent=true",
      title: "Integre seu ERP",
      subtitle: "SAP, Totvs",
      description: "Com solulções personalizadas e inteligentes",
      buttonText: "Saiba mais sobre nossos consultores ABAP"
    },
    {
      id: 2,
      backgroundImage: "https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/9d6fec8f4137fce28ac2e295452fdc6e75ade11e?placeholderIfAbsent=true",
      title: "Agregue profissionais a sua squad.",
      subtitle: "Encontre os profissionais de tecnologia você procura com nossa consultoria de RH.",
      description: "Huting e Tercerização",
      buttonText: "Saíba mais."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-blend-normal self-stretch flex min-h-[675px] w-full gap-[-1425px] overflow-hidden flex-wrap max-md:max-w-full">
      <div className="bg-blend-normal flex min-w-60 min-h-[675px] gap-[-1425px] text-white flex-wrap w-[2850px] max-md:max-w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex flex-col bg-blend-normal relative min-h-[675px] min-w-60 overflow-hidden font-normal justify-center w-[1425px] px-20 py-[211px] max-md:max-w-full max-md:px-5 max-md:py-[100px] transition-transform duration-500 ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <img
              src={slide.backgroundImage}
              alt={`Slide ${slide.id} background`}
              className="absolute h-full w-full object-cover inset-0"
            />
            <div className="relative flex w-[440px] max-w-full flex-col">
              <h1 className="text-[43px] font-bold leading-none">
                {slide.title}
              </h1>
              <h2 className="text-2xl leading-[1.2] mt-[30px]">
                {slide.subtitle}
              </h2>
              <p className="text-[21px] self-stretch mt-[30px] max-md:max-w-full">
                {slide.description}
              </p>
              <button className="rounded bg-blend-normal bg-[rgba(86,51,208,1)] text-[15px] font-medium tracking-[0.3px] leading-none mt-[30px] px-[37px] py-[17px] border-[rgba(86,51,208,1)] border-solid border-2 max-md:px-5 hover:bg-[rgba(86,51,208,0.9)] transition-colors">
                {slide.buttonText}
              </button>
            </div>
            {index === 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-20 max-md:px-5">
                <button
                  onClick={goToPrevSlide}
                  className="bg-blend-normal bg-[rgba(0,0,0,0.27)] flex w-[43px] shrink-0 h-[43px] rounded-[3px] hover:bg-[rgba(0,0,0,0.4)] transition-colors"
                  aria-label="Previous slide"
                />
                <button
                  onClick={goToNextSlide}
                  className="bg-blend-normal bg-[rgba(0,0,0,0.27)] flex w-[43px] shrink-0 h-[43px] rounded-[3px] hover:bg-[rgba(0,0,0,0.4)] transition-colors"
                  aria-label="Next slide"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-blend-normal bg-white flex min-w-60 flex-col justify-center w-[1425px] py-0.5 max-md:max-w-full">
        <div
          className="bg-blend-normal bg-[rgba(86,51,208,1)] flex shrink-0 max-w-full h-px transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 356}px` }}
        />
      </div>
    </section>
  );
};
