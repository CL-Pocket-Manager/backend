const { Archive } = require("../models/archive");

// Get all Archives
exports.archive_list = async (req, res, next) => {
  const { inventoryName } = req.query; // Get inventoryName from query parameters

  try {
    const archives = await Archive.find(
      { inventoryName }, // Filter by inventoryName
      "id inventoryName archiveDate items" // Select only the id, inventoryName, archiveDate, and items fields
    );
    res.json(archives);
  } catch (error) {
    next(error); // Pass any errors to the error handler
  }
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
