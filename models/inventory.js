const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// InventoryItem schema
const inventoryItemSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    required: true,
    // This reference allows the item to be either an Item or an AlcoholItem
    refPath: "onModel",
  },
  onModel: {
    type: String,
    required: true,
    enum: ["Item", "AlcoholItem"], // Specify the models the item can reference
  },
  unitOfMeasure: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  costPerUnit: { type: Number, required: true },
  distributor: { type: Schema.Types.ObjectId, required: true },
  par: { type: Number, required: true },
  stock: { type: Number, required: false },
});

// Inventory schema
const inventorySchema = new Schema({
  inventoryName: { type: String, required: true },
  items: {
    type: [inventoryItemSchema], // Array of InventoryItem documents
    default: [],
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = { Inventory }; // Export the Inventory model
