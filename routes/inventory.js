const express = require("express");
const router = express.Router();

const inventory_controller = require("../controllers/inventoryController");

/// INVENTORY ROUTES ///
// Get all inventories
router.get("/all", inventory_controller.inventory_list);

// Get an inventory by ID
router.get("/:id", inventory_controller.inventory_detail);

// Create an inventory
router.post("/create", inventory_controller.inventory_create_post);

// Update an inventory
router.put("/:id/update", inventory_controller.inventory_update_put);

// Delete an inventory
router.delete("/:id/delete", inventory_controller.inventory_delete);

// Add an item to an inventory
router.put("/:id/add-item", inventory_controller.inventory_add_item);

// Remove an item from an inventory
router.put("/:id/remove-item", inventory_controller.inventory_remove_item);

// Edit an item in an inventory
router.put("/:id/edit-item", inventory_controller.inventory_edit_item);

module.exports = router;
