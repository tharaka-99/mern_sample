const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  discription: {
    type: String,
    // required: true
  },
  available: {
    type: String,
    // require: true
  },
  amount: {
    type: String,
    // require: true
  },
});

module.exports = mongoose.model("StoreSchema", StoreSchema);
