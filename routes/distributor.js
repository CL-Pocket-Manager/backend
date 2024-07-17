const express = require("express");
const router = express.Router();

const distriburorController = require("../controllers/distributorController");

/// DISTRIBUTOR ROUTES ///
// Get all distributors
router.get("/all", distriburorController.distributor_list);

// Add a distributor
router.post("/add", distriburorController.distributor_add);

module.exports = router;
