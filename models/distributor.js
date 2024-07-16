const mongoose = require("mongoose");

const distributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure distributor names are unique
  },
});

const Distributor = mongoose.model("Distributor", distributorSchema);

module.exports = Distributor;
