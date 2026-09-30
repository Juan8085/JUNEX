const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Se eliminan las opciones obsoletas ya que Mongoose las maneja por defecto
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Atlas Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;