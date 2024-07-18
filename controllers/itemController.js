const { Item, AlcoholItem } = require("../models/item");

// Display list of all Items.
exports.item_list = async (req, res, next) => {
  const items = await Item.find();
  res.json(items);
};

// Return all items with just id and name
exports.item_list_short = async (req, res, next) => {
  const items = await Item.find({}, "id name");
  res.json(items);
};

// Display detail page for a specific Item.
exports.item_detail = async (req, res, next) => {
  const item = await Item.findById(req.params.id);
  console.log(item);
  res.json(item);
};

// Return individual item by ID with just id and name
exports.item_detail_short = async (req, res, next) => {
  const item = await Item.findById(req.params.id, "id name");
  res.json(item);
};

// Search for an item by keyword.
exports.item_search = async (req, res, next) => {
  try {
    const items = await Item.find({
      name: { $regex: req.params.keyword, $options: "i" }, // Case-insensitive search
    });

    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Handle Item create on POST.
exports.item_create_post = async (req, res, next) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    distributor: req.body.distributor,
    itemType: req.body.itemType,
  });

  const savedItem = await item.save();

  if (!savedItem) {
    return next(new Error("Failed to save item"));
  }

  res.status(201).json(savedItem);
};

// Handle Item update on PUT.
exports.item_update_put = async (req, res, next) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedItem) {
    return next(new Error("Failed to update item"));
  }

  res.json(updatedItem);
};

// Handle Alcohol Item create on POST.
exports.alcohol_item_create_post = async (req, res, next) => {
  const alcoholItem = new AlcoholItem({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    distributor: req.body.distributor,
    itemType: req.body.itemType,
    alcoholType: req.body.alcoholType,
    alcoholContent: req.body.alcoholContent,
  });

  const savedItem = await alcoholItem.save();

  if (!savedItem) {
    return next(new Error("Failed to save item"));
  }

  res.status(201).json(savedItem);
};

// Handle Alcohol Item update on PUT.
exports.alcohol_item_update_put = async (req, res, next) => {
  const updatedItem = await AlcoholItem.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedItem) {
    return next(new Error("Failed to update item"));
  }

  res.json(updatedItem);
};

// Handle Item delete on DELETE.
exports.item_delete = async (req, res, next) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);

  if (!deletedItem) {
    return next(new Error("Failed to delete item"));
  }

  res.json(deletedItem);
};
