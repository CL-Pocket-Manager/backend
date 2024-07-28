const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { inventoryItemSchema } = require("./inventory"); // Import the inventoryItemSchema

// Archive schema
const archiveSchema = new Schema({
  inventoryName: { type: String, required: true },
  items: {
    type: [inventoryItemSchema],
    default: [],
  },
  archiveDate: { type: Date, required: true, default: Date.now },
});

const Archive = mongoose.model("Archive", archiveSchema);

module.exports = { Archive };
