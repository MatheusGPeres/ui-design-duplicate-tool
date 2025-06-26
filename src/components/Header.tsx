
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b7cbc58662a40e68e75e2c56ef1d835/6c6686bb5e99ff4ea44fcdaeafb17b3fd93638e0?placeholderIfAbsent=true"
              alt="ÜpBase Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-8 text-base text-[rgba(86,51,208,1)] font-semibold">
              <li className="flex flex-col items-center">
                <a href="#inicio" className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors">
                  Inicio
                </a>
                <div className="w-full h-1 bg-[rgba(86,51,208,1)] rounded-full mt-1" />
              </li>
              <li>
                <a href="#sobre" className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#clientes" className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#cases" className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#estagios" className="px-4 py-2 hover:text-[rgba(86,51,208,0.8)] transition-colors">
                  Estágios
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="flex-shrink-0">
            <button className="bg-[rgba(86,51,208,1)] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[rgba(86,51,208,0.9)] transition-colors">
              Agende uma reunião
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
