const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection URI from environment variables
const DB_URL = process.env.DATABASE_URL;

// Function to connect to MongoDB
exports.connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

