const mongoose = require("mongoose");

const distributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure distributor names are unique
  },
  website: {
    type: String,
    required: false, // Assuming the website is optional
  },
  contact: {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  },
});

const Distributor = mongoose.model("Distributor", distributorSchema);

module.exports = { Distributor };
