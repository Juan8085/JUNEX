import React from 'react';

export default function HeroAndFlagship() {
  return (
    <section id="inicio" className="bg-junex-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna de Texto Institucional */}
        <div>
          <span className="text-xs uppercase tracking-widest bg-junex-cyan/10 text-junex-cyan px-3 py-1 rounded-full border border-junex-cyan/30 font-semibold">
            Construyendo el Futuro Digital
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-tight">
            Conectamos ideas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-junex-cyan to-teal-400">
              Construimos lo que sigue.
            </span>
          </h1>
          <p className="mt-6 text-junex-slateText text-lg leading-relaxed">
            Transformamos y optimizamos la gestión operativa y financiera de organizaciones municipales, veredales y asociaciones rurales en Colombia mediante soluciones tecnológicas integrales[cite: 2].
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#aquarural" className="bg-junex-cyan text-junex-dark px-8 py-3.5 rounded-xl font-bold hover:bg-cyan-300 transition shadow-xl shadow-junex-cyan/10">
              Ver AquaRural
            </a>
            <a href="#contacto" className="border border-slate-700 hover:border-junex-cyan px-8 py-3.5 rounded-xl font-bold transition text-white">
              Agendar Asesoría
            </a>
          </div>
        </div>

        {/* Tarjeta Destacada del Proyecto Insignia: AQUARURAL */}
        <div className="bg-junex-card border border-slate-800 p-8 rounded-3xl relative shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-junex-cyan/5 rounded-full blur-3xl group-hover:bg-junex-cyan/10 transition"></div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-junex-cyan flex items-center justify-center text-white font-bold text-xl shadow-md">
              💧
            </div>
            <div>
              <span className="text-xs text-junex-cyan font-bold tracking-wider uppercase">Proyecto Insignia</span>
              <h3 className="text-2xl font-bold">AquaRural</h3>
            </div>
          </div>
          <p className="text-junex-slateText text-sm leading-relaxed mb-6">
            Plataforma avanzada para la gestión de acueductos veredales. Automatiza la lectura de medidores, control de usuarios, facturación y recaudo bancarizado con capacidades de funcionamiento offline diseñadas para zonas rurales[cite: 2].
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6">
            <div>
              <span className="block text-2xl font-black text-white">100%</span>
              <span className="text-xs text-junex-slateText">Control Administrativo</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-junex-cyan">Offline</span>
              <span className="text-xs text-junex-slateText">Resiliente y Sincronizable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}