const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection sucessful to DB ");
  } catch (error) {
    console.error("database connection failed ", error.message);
    process.exit(0);
  }
};

module.exports = connectDb;
