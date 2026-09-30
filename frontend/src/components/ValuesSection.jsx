import React from 'react';

export default function ValuesSection() {
  const values = [
    {
      title: "Innovación con Propósito",
      desc: "Desarrollamos tecnología aplicada a resolver dolores reales y cotidianos de los administradores rurales y municipales[cite: 2]."
    },
    {
      title: "Inclusión y Accesibilidad",
      desc: "Diseñamos interfaces intuitivas y sistemas eficientes, entendiendo los retos tecnológicos y de conectividad en los territorios[cite: 2]."
    },
    {
      title: "Transparencia",
      desc: "Garantizamos la trazabilidad y seguridad en los procesos de recaudo, pasarelas de pago y manejo de información financiera[cite: 2]."
    },
    {
      title: "Excelencia Operativa",
      desc: "La sinergia entre el desarrollo de software y la visión administrativa garantiza productos escalables, estables y de alto rendimiento[cite: 2]."
    },
    {
      title: "Compromiso Regional",
      desc: "Trabajamos con la convicción de que tecnificar el campo y sus asociaciones es el motor principal del crecimiento del país[cite: 2]."
    }
  ];

  return (
    <section id="valores" className="py-20 bg-junex-dark px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest bg-junex-cyan/10 text-junex-cyan px-3 py-1 rounded-full border border-junex-cyan/30 font-semibold">
            Filosofía Institucional
          </span>
          <h2 className="text-3xl font-bold mt-4">Nuestros Valores Corporativos</h2>
          <p className="text-junex-slateText mt-3">Principios rectores que guían cada solución tecnológica que entregamos a las regiones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <div key={index} className="bg-junex-card border border-slate-800 p-8 rounded-3xl hover:border-junex-cyan/50 transition">
              <div className="w-10 h-10 rounded-xl bg-junex-cyan/10 border border-junex-cyan/30 flex items-center justify-center text-junex-cyan font-bold mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-junex-slateText text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}