const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI =
//   "mongodb+srv://dawood9743:tMnIlsa9VcBtRevG@cluster0.yrnmq.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGODB_URI;
// const URI =
//   "mongodb+srv://dawood9743:tMnIlsa9VcBtRevG@cluster0.yrnmq.mongodb.net/mern_admin";
// const URI =
//   "mongodb+srv://dawood9743:tMnIlsa9VcBtRevG@cluster0.yrnmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const URI =
//   "mongodb+srv://dawood9743:damon%40123@cluster0.fwik4.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(URI);
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
