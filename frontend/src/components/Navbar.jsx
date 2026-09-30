import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-junex-dark/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Simulación del isotipo J tecnológico */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-junex-cyan to-junex-teal flex items-center justify-center font-bold text-junex-dark text-2xl shadow-lg shadow-junex-cyan/20">
            J
          </div>
          <span className="text-2xl font-black tracking-wider text-white">
            JUNEX<span className="text-junex-cyan">.</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-junex-slateText">
          <a href="#inicio" className="hover:text-junex-cyan transition">Inicio</a>
          <a href="#nosotros" className="hover:text-junex-cyan transition">Misión & Visión</a>
          <a href="#aquarural" className="text-junex-cyan font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-junex-cyan animate-pulse"></span> AquaRural
          </a>
          <a href="#valores" className="hover:text-junex-cyan transition">Valores</a>
          <a href="#contacto" className="bg-junex-cyan text-junex-dark px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-300 transition shadow-lg shadow-junex-cyan/20">
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}