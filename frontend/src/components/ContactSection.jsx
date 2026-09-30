import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceInterest: 'AquaRural',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
        setFormData({ name: '', organization: '', email: '', phone: '', serviceInterest: 'AquaRural', message: '' });
      } else {
        setStatus('Hubo un error al enviar la solicitud. Intenta nuevamente.');
      }
    } catch (error) {
      setStatus('Error de conexión con el servidor.');
    }
  };

  return (
    <section id="contacto" className="py-20 bg-junex-dark px-6 border-t border-slate-800">
      <div className="max-w-3xl mx-auto bg-junex-card border border-slate-800 p-8 lg:p-12 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Inicie su Transformación Digital</h2>
        <p className="text-junex-slateText text-center mb-8 text-sm">Permítanos optimizar la administración de su acueducto o asociación rural.</p>
        
        {status && <div className="mb-6 p-4 rounded-xl bg-junex-cyan/10 border border-junex-cyan/30 text-junex-cyan text-sm text-center">{status}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Nombre Completo</label>
              <input type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Organización / Acueducto</label>
              <input type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Correo Electrónico</label>
              <input type="email" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Teléfono / WhatsApp</label>
              <input type="text" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Solución de Interés</label>
            <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.serviceInterest} onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}>
              <option value="AquaRural">AquaRural (Gestión de Acueductos)</option>
              <option value="Software Ganadero">Software Sectorial / Ganadero</option>
              <option value="Plataforma Web a la Medida">Plataforma Web a la Medida</option>
              <option value="Otro">Otro servicio institucional</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-junex-slateText mb-2">Mensaje o Requerimiento</label>
            <textarea rows="4" required className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-junex-cyan transition" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          </div>
          <button type="submit" className="w-full bg-junex-cyan text-junex-dark font-bold py-4 rounded-xl hover:bg-cyan-300 transition shadow-lg shadow-junex-cyan/20">
            Enviar Solicitud a JUNEX
          </button>
        </form>
      </div>
    </section>
  );
}