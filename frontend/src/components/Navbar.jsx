import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-junex-dark/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logotipo Oficial */}
        <div className="flex items-center">
          <a href="#inicio" className="flex items-center">
            <img src="/LOGO.jpeg" alt="JUNEX Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
          </a>
        </div>

        {/* Enlaces de Navegación */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-junex-slateText">
          <a href="#inicio" className="hover:text-junex-cyan transition">Inicio</a>
          <a href="#nosotros" className="hover:text-junex-cyan transition">Misión & Visión</a>
          <a href="#valores" className="hover:text-junex-cyan transition">Valores</a>
          <a href="#proyectos" className="hover:text-junex-cyan transition">Proyectos</a>
          <a href="#experiencias" className="hover:text-junex-cyan transition">Experiencias</a>
          <a href="#contacto" className="bg-junex-cyan text-junex-dark px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-300 transition shadow-lg shadow-junex-cyan/25">
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}