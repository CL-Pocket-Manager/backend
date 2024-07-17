const express = require("express");
const router = express.Router();

const item_controller = require("../controllers/itemController");

/// ITEM ROUTES ///

// Get all items
router.get("/all", item_controller.item_list);

// Get all items with just id and name
router.get("/all-short", item_controller.item_list_short);

// Create an item
router.post("/create", item_controller.item_create_post);

// Search for an item by keyword
router.get("/search/:keyword", item_controller.item_search);

// Update an item
router.put("/:id/update", item_controller.item_update_put);

// Create an alcohol item
router.post("/alcohol/create", item_controller.alcohol_item_create_post);

// Update an alcohol item
router.put("/alcohol/:id/update", item_controller.alcohol_item_update_put);

// Get an item by ID
router.get("/:id", item_controller.item_detail);

// Delete an item
router.delete("/:id/delete", item_controller.item_delete);

module.exports = router;
