import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "AquaRural",
      category: "Gestión de Acueductos Veredales",
      description: "Plataforma centralizada para automatizar lecturas, padrón de usuarios, facturación y recaudo en línea para acueductos rurales.",
      status: "En Producción / Escalamiento",
      url: "https://aquarural-placeholder.com"
    },
    {
      title: "Sistemas de Gestión Pyme & Gremial",
      category: "Administración Comercial",
      description: "Soluciones a la medida para control de espacios comunes, contabilidad interna y formalización de procesos administrativos para asociaciones.",
      status: "Activo",
      url: "#contacto"
    },
    {
      title: "Infraestructura Cloud & APIs REST",
      category: "Desarrollo Full-Stack",
      description: "Arquitecturas de alto rendimiento con Node.js, Express y bases de datos NoSQL diseñadas para garantizar estabilidad y seguridad de datos.",
      status: "Implementado",
      url: "#contacto"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-junex-dark px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest bg-junex-cyan/10 text-junex-cyan px-3 py-1 rounded-full border border-junex-cyan/30 font-semibold">
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl font-bold mt-4">Proyectos que Transforman Regiones</h2>
          <p className="text-junex-slateText mt-3">Soluciones tecnológicas reales diseñadas para resolver las necesidades operativas del campo y la ciudad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-junex-card border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-junex-cyan/50 transition group">
              <div>
                <span className="text-xs font-bold text-junex-cyan uppercase tracking-wider">{proj.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-junex-cyan transition">{proj.title}</h3>
                <p className="text-junex-slateText text-sm mt-4 leading-relaxed">{proj.description}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{proj.status}</span>
                <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-junex-cyan text-sm font-bold hover:underline">
                  Ver más ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}