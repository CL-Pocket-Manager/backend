const express = require("express");
const router = express.Router();

const inventory_controller = require("../controllers/inventoryController");

/// INVENTORY ROUTES ///
// Get all inventories
router.get("/all", inventory_controller.inventory_list);

// Get an inventory by ID
router.get("/:inventoryId", inventory_controller.inventory_detail);

// Create an inventory
router.post("/create", inventory_controller.inventory_create_post);

// Update an inventory
router.put("/:inventoryId/update", inventory_controller.inventory_update_put);

// Delete an inventory
router.delete("/:inventoryId/delete", inventory_controller.inventory_delete);

// Add an item to an inventory
router.put("/:inventoryId/add-item", inventory_controller.inventory_add_item);

// Get an item from an inventory
router.get(
  "/:inventoryId/items/:itemId",
  inventory_controller.inventory_get_item
);

// Update an item in an inventory
router.put(
  "/:inventoryId/update-item/:itemId",
  inventory_controller.inventory_update_item
);

// Remove an item from an inventory
router.delete(
  "/:inventoryId/remove-item/:itemId",
  inventory_controller.inventory_remove_item
);

module.exports = router;
