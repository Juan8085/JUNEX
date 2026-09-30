import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Gracias a la implementación de herramientas tecnológicas en nuestra organización, logramos transparentar el recaudo y optimizar el control administrativo de forma sobresaliente.",
      author: "Administración Junta Directiva",
      role: "Sector Acueductos Veredales"
    },
    {
      quote: "JUNEX entendió perfectamente los retos operativos de nuestra asociación. El soporte y la estructura de las aplicaciones nos han brindado total tranquilidad empresarial.",
      author: "Dirección Operativa",
      role: "Asociaciones Regionales"
    }
  ];

  return (
    <section id="experiencias" className="py-20 bg-slate-900/40 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest bg-junex-cyan/10 text-junex-cyan px-3 py-1 rounded-full border border-junex-cyan/30 font-semibold">
            Testimonios
          </span>
          <h2 className="text-3xl font-bold mt-4">Experiencias de Nuestros Aliados</h2>
          <p className="text-junex-slateText mt-3">Lo que dicen los administradores y líderes comunitarios sobre nuestras soluciones digitales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-junex-card border border-slate-800 p-8 rounded-3xl relative">
              <span className="text-4xl text-junex-cyan font-serif absolute top-6 left-6 opacity-30">“</span>
              <p className="text-junex-slateText text-sm leading-relaxed relative z-10 mb-6 italic">
                "{test.quote}"
              </p>
              <div className="border-t border-slate-800 pt-4">
                <h4 className="font-bold text-white text-base">{test.author}</h4>
                <span className="text-xs text-junex-cyan font-medium">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}