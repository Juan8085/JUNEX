const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organization: { type: String, required: true }, // Ej: Acueducto Veredal / Asociación
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceInterest: { type: String, enum: ['AquaRural', 'Software Ganadero', 'Plataforma Web a la Medida', 'Otro'], required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);