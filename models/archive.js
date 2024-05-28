const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { foodSchema } = require("./food"); // Import foodSchema from food.js

const archiveSchema = new Schema({
  date: { type: Date, default: Date.now },
  archive: [foodSchema],
});

module.exports = mongoose.model("Archive", archiveSchema);
