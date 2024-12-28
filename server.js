require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./midderwares/error-middleware");
// Mount the Router to use the router in your main Express app you can mount  it at   specific URL prefix

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credential: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRoute);

// lets define Admin routes

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);
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
