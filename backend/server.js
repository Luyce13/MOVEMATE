const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const express = require("express");
const { connectToDB, disconnectMongoDB } = require("./config/db");

const app = express();
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/movemate', require('./routes/authRoutes'))
app.get("/", (req, res) => {
  res.end("😁Get ho rya ay yaayyy..");
});
app.use(errorHandler)
const port = process.env.PORT || 5678;
app.listen(port, "192.168.43.188", () =>
  console.log(`Server chal gya j😁 port ${port} ty`)
);

process.on('SIGINT', disconnectMongoDB)
