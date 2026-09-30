require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Rutas de Leads y Notificaciones
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.send('JUNEX API en funcionamiento - Conectando ideas, construyendo el futuro digital.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));