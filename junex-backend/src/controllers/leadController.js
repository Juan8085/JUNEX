const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

const createLead = async (req, res) => {
  try {
    const { name, organization, email, phone, serviceInterest, message } = req.body;
    
    if (!name || !organization || !email || !phone || !serviceInterest || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // 1. Guardar en Base de Datos (MongoDB Atlas)
    const newLead = new Lead({
      name,
      organization,
      email,
      phone,
      serviceInterest,
      message
    });

    const savedLead = await newLead.save();

    // 2. Configurar el transporter con la opción tls para evitar bloqueos locales de certificados
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Soluciona el error de certificado en entornos locales de Windows
      }
    });

    const mailOptions = {
      from: `"Plataforma JUNEX" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.EMAIL_USER,
      subject: `Nueva Solicitud Web: ${organization} - ${serviceInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0B0F19; color: #ffffff; border-radius: 10px;">
          <h2 style="color: #00F0FF;">Nueva Solicitud de Contacto - JUNEX</h2>
          <p>Has recibido un nuevo prospecto desde la plataforma web corporativa:</p>
          <ul style="background: #131C2E; padding: 15px; border-radius: 8px; list-style: none; line-height: 1.6;">
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Organización / Acueducto:</strong> ${organization}</li>
            <li><strong>Correo:</strong> ${email}</li>
            <li><strong>Teléfono / WhatsApp:</strong> ${phone}</li>
            <li><strong>Servicio de Interés:</strong> ${serviceInterest}</li>
            <li><strong>Mensaje:</strong> ${message}</li>
          </ul>
          <p style="font-size: 12px; color: #94A3B8; margin-top: 20px;">Este es un mensaje automático generado por el sistema backend de JUNEX.</p>
        </div>
      `,
    };

    // Enviar correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('ERROR SMTP - No se pudo enviar el correo:', error);
      } else {
        console.log('Correo institucional enviado con éxito:', info.response);
      }
    });

    res.status(201).json({ success: true, data: savedLead });
  } catch (error) {
    console.error('Error en controlador leadController:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createLead };