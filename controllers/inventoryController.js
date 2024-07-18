const { Inventory } = require("../models/inventory");
const { Item } = require("../models/item");

// Display list of all Inventory's with only id and name.
exports.inventory_list = async (req, res, next) => {
  const inventories = await Inventory.find({}, "id inventoryName"); // Select only the id and name fields
  res.json(inventories);
};

// Display detail page for a specific Inventory.
exports.inventory_detail = async (req, res, next) => {
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return next(new Error("Inventory not found"));
  }

  res.json(inventory);
};

// Create an Inventory
exports.inventory_create_post = async (req, res, next) => {
  const inventory = new Inventory({
    inventoryName: req.body.inventoryName,
  });

  const savedInventory = await inventory.save();

  if (!savedInventory) {
    return next(new Error("Failed to save inventory"));
  }

  res.status(201).json(savedInventory);
};

// Edit an Inventory name
exports.inventory_update_put = async (req, res, next) => {
  const updatedInventory = await Inventory.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedInventory) {
    return next(new Error("Failed to update inventory"));
  }

  res.json(updatedInventory);
};

// Delete an Inventory
exports.inventory_delete = async (req, res, next) => {
  const inventory = await Inventory.findByIdAndDelete(req.params.id);

  if (!inventory) {
    return next(new Error("Failed to delete inventory"));
  }

  res.json(inventory);
};

// Add an item to an Inventory
exports.inventory_add_item = async (req, res, next) => {
  const inventoryItem = Item.findById(req.body.item);

  const onModel =
    inventoryItem.itemType === "Alcoholic Beverage" ? "AlcoholItem" : "Item";
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return next(new Error("Inventory not found"));
  }

  const item = {
    item: req.body.item,
    onModel: onModel,
    unitOfMeasure: req.body.unitOfMeasure,
    qtyPerUnit: req.body.qtyPerUnit,
    costPerUnit: req.body.costPerUnit,
    distributor: req.body.distributor,
    par: req.body.par,
    stock: req.body.stock,
  };

  inventory.items.push(item);

  const savedInventory = await inventory.save();

  if (!savedInventory) {
    return next(new Error("Failed to add item to inventory"));
  }

  res.status(201).json(savedInventory);
};

// Remove an item from an Inventory
exports.inventory_remove_item = async (req, res, next) => {
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return next(new Error("Inventory not found"));
  }

  inventory.items.id(req.params.itemId).remove();

  const savedInventory = await inventory.save();

  if (!savedInventory) {
    return next(new Error("Failed to remove item from inventory"));
  }

  res.json(savedInventory);
};

// Edit an item in an Inventory
exports.inventory_edit_item = async (req, res, next) => {
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return next(new Error("Inventory not found"));
  }

  const item = inventory.items.id(req.params.itemId);

  if (!item) {
    return next(new Error("Item not found"));
  }

  item.set(req.body);

  const savedInventory = await inventory.save();

  if (!savedInventory) {
    return next(new Error("Failed to update item in inventory"));
  }

  res.json(savedInventory);
};
