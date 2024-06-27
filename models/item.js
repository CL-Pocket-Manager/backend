const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base Item schema
const itemSchema = new Schema(
  {
    name: { type: String, required: [true, "Name field is required"] },
    description: { type: String, required: false },
    image: { type: String, required: false },
    distributor: {
      type: String,
      required: true,
      enum: ["Chef's Warehouse", "Southern", "Empire", "Internal", "Other"],
    },
    itemType: {
      type: String,
      required: true,
      enum: ["Food", "Alcohol", "Supplies", "Beverage"],
    }, // 'Food' items will be created directly from this model
  },
  { discriminatorKey: "itemType" }
); // Use 'itemType' as the discriminator key

const Item = mongoose.model("Item", itemSchema);

// Alcohol-specific fields
const alcoholSchema = new Schema({
  alcoholType: {
    type: String,
    required: true,
    enum: ["Whiskey", "Agave", "Vodka", "Rum", "Gin", "Beer", "Wine", "Other"],
  },
  alcoholContent: { type: Number, required: true },
});

const AlcoholItem = Item.discriminator("Alcohol", alcoholSchema);

module.exports = { Item, itemSchema, AlcoholItem, alcoholSchema }; // Export alcoholSchema
