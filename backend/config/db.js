require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //accessing MONGO DB URL from dot env file
    await mongoose.connect("mongodb://localhost:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log(error);
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
