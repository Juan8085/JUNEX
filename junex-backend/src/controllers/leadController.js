const Lead = require('../models/Lead');

const createLead = async (req, res) => {
  try {
    const { name, organization, email, phone, serviceInterest, message } = req.body;
    
    if (!name || !organization || !email || !phone || !serviceInterest || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const newLead = new Lead({
      name,
      organization,
      email,
      phone,
      serviceInterest,
      message
    });

    const savedLead = await newLead.save();
    res.status(201).json({ success: true, data: savedLead });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createLead
};