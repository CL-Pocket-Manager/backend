const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: [true, "Name field is required"] },
  unit: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  par: { type: Number, required: true },
  stock: { type: Number, required: false },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = { Food, foodSchema }; // Export foodSchema
