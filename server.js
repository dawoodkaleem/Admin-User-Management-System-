require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
// Mount the Router to use the router in your main Express app you can mount  it at   specific URL prefix
app.use(express.json());
app.use("/api/auth", router);
// To parse JSON request bodies

// app.get("/", (req, res) => {
//   res.status(200).send("welcome to the world best series ");
// });
// app.get("/register", (req, res) => {
//   res.status(200).send("welcome to the  register  page");
// });
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port:${PORT} `);
  });
});

// http://localhost:5000/api/auth/register
