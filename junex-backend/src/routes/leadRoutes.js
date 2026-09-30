const express = require('express');
const router = express.Router();
const { createLead } = require('../controllers/leadController');

// Verificamos que createLead sea una función antes de registrarla
if (typeof createLead !== 'function') {
  throw new Error('El controlador createLead no se importó correctamente como función.');
}

router.post('/', createLead);

module.exports = router;