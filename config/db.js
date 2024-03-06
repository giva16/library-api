require('dotenv').config();
const mongoose = require('mongoose');
const databaseURI = process.env.MONGODB_URI;

// throws an error if a required field isnt filled
mongoose.set('strictQuery', true);

const connectDB = async () => {
  const conn = await mongoose.connect(databaseURI);
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
