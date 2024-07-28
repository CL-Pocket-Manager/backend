const express = require("express");
const router = express.Router();

const archiveController = require("../controllers/archiveController");

/// ARCHIVE ROUTES ///
// Get all archives
router.get("/all", archiveController.archive_list);

// Create an archive
router.post("/create", archiveController.archive_create);

module.exports = router;
