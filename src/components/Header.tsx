import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <div className="w-[1127px] max-w-full ml-[149px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[16%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/6c6686bb5e99ff4ea44fcdaeafb17b3fd93638e0?placeholderIfAbsent=true"
              alt="ÜpBase Logo"
              className="aspect-[1] object-contain w-32 bg-blend-normal shrink-0 max-w-full max-md:mt-10"
            />
          </div>
          <nav className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <ul className="bg-blend-normal flex min-h-[46px] self-stretch text-base text-[rgba(86,51,208,1)] font-semibold leading-none my-auto max-md:max-w-full max-md:mt-10">
              <li className="bg-blend-normal flex flex-col items-stretch whitespace-nowrap w-[79px] pt-3">
                <a href="#inicio" className="self-center">
                  Inicio
                </a>
                <div className="bg-blend-normal bg-[rgba(86,51,208,1)] flex shrink-0 h-[3px] mt-[11px]" />
              </li>
              <li className="bg-blend-normal w-28 px-5 py-[13px]">
                <a href="#sobre">Sobre nós</a>
              </li>
              <li className="bg-blend-normal whitespace-nowrap w-[99px] px-5 py-[13px]">
                <a href="#clientes">Clientes</a>
              </li>
              <li className="bg-blend-normal whitespace-nowrap w-[84px] px-5 py-[13px]">
                <a href="#cases">Cases</a>
              </li>
              <li className="bg-blend-normal whitespace-nowrap w-[102px] px-5 py-[13px]">
                <a href="#estagios">Estágios</a>
              </li>
            </ul>
          </nav>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <button className="bg-blend-normal bg-[rgba(86,51,208,1)] self-stretch text-[15px] text-white font-medium leading-none w-full my-auto px-6 py-3 rounded-[3px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(86,51,208,0.9)] transition-colors">
              Agende uma reunião
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
