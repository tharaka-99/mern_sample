const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  nic: {
    type: String,
    // required: true
  },
  bikeName: {
    type: String,
    // require: true
  },
  bikeId: {
    type: String,
    // require: true
  },
  date: {
    type: String,
    // required: true
  },
  start: {
    type: String,
    // required: true
  },
  end: {
    type: String,
    //    required: true
  },
  description: {
    type: String,
    // required: true
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
