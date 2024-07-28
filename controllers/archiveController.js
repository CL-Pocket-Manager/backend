const { Archive } = require("../models/archive");

// Get all Archives
exports.archive_list = async (req, res, next) => {
  const archives = await Archive.find({}, "id inventoryName archiveDate"); // Select only the id, inventoryName, and archiveDate fields
  res.json(archives);
};

// Create a new Archive
exports.archive_create = async (req, res, next) => {
  const archive = new Archive({
    inventoryName: req.body.inventoryName,
    items: req.body.items,
  });

  const savedArchive = await archive.save();

  if (!savedArchive) {
    return next(new Error("Failed to save archive"));
  }

  res.status(201).json(savedArchive);
};
