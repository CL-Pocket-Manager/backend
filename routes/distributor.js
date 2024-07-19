const express = require("express");
const router = express.Router();

const distributorController = require("../controllers/distributorController");

/// DISTRIBUTOR ROUTES ///
// Get all distributors
router.get("/all", distributorController.distributor_list);

// Create a distributor
router.post("/create", distributorController.distributor_create);

module.exports = router;
