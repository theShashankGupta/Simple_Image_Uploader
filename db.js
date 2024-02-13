const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // change the dbname accordingly
    await mongoose.connect('mongodb://0.0.0.0:27017/local', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
