import React from 'react';

export default function StrategicSections() {
  return (
    <section id="nosotros" className="py-20 bg-slate-900/50 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Nuestra Identidad Estratégica</h2>
          <p className="text-junex-slateText mt-3">Impulsando el desarrollo y la competitividad de las regiones con bases administrativas sólidas.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-junex-card p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-junex-cyan mb-3">Misión</h3>
            <p className="text-junex-slateText text-sm leading-relaxed">
              Transformar y optimizar la gestión operativa, administrativa y financiera de las organizaciones municipales, veredales y departamentales en Colombia mediante soluciones tecnológicas accesibles y a la medida[cite: 2].
            </p>
          </div>
          <div className="bg-junex-card p-8 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-junex-cyan mb-3">Visión (2031)</h3>
            <p className="text-junex-slateText text-sm leading-relaxed">
              Ser la empresa líder y el aliado tecnológico preferido en la digitalización del sector rural y municipal en Colombia, cerrando la brecha digital mediante ecosistemas robustos[cite: 2].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}