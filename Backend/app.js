const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/booking-router");
const storeRoute = require("./routes/Store-Router");
const app = express();
const cors = require("cors");
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/booking", router); //localhost:5000/booking
app.use("/store", storeRoute);

mongoose
  .connect(
    "mongodb+srv://admin:Dl7TaieR2MDQ1r4P@cluster0.hufanmp.mongodb.net/Ebike?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connect to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//Dl7TaieR2MDQ1r4P
