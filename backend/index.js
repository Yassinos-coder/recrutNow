const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ordersRouter = require("./APIs/ordersAPIs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
let db_connection_success;

app.listen(process.env.BACK_END, () =>
  console.log(`BackEnd Up and runing on port ${process.env.BACK_END}`)
);


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,})
  .then(() => {
    console.info("Database connection granted");
    db_connection_success = true;})
  .catch((error) => {
    db_connection_success = false;
    console.warn("Database connection error:", error.message)
});

app.use(ordersRouter);
