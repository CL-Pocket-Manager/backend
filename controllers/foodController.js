const { Food } = require("../models/food");
const archiveSchema = require("../models/archive");
const asyncHandler = require("express-async-handler");

// Display list of all Food items.
exports.item_list = asyncHandler(async (req, res, next) => {
  const items = await Food.find();
  res.json(items);
});

// Display list of all Archived data.
exports.archive_list = asyncHandler(async (req, res, next) => {
  const items = await archiveSchema.find();
  res.json(items);
});

// Handle Food Archive create on POST.
exports.archive_create_post = asyncHandler(async (req, res, next) => {
  const archive = new archiveSchema({
    archive: req.body,
  });

  const savedItem = await archive.save();

  if (!savedItem) {
    return next(new Error("Failed to save food item"));
  }

  res.status(201).json(savedItem);
});

// Display detail page for a specific Food item.
exports.item_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Food item detail: ${req.params.id}`);
});

// Display Food item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Food item create GET");
});

// Handle Food item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {
  const foodItem = new Food({
    name: req.body.name,
    unit: req.body.unit,
    qtyPerUnit: req.body.qtyPerUnit,
    par: req.body.par,
  });

  const savedItem = await foodItem.save();

  if (!savedItem) {
    return next(new Error("Failed to save food item"));
  }

  res.status(201).json(savedItem);
});

// Display Food item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Food item delete GET");
});

// Handle Food item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Food item delete POST");
});

// Display Food item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Food item update GET");
});

// Handle Food item update on POST.
exports.item_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Food item update POST");
});
