// const express = require("express");
// const asyncHandler = require("express-async-handler");
// const router = express.Router();

// router.get(
//   "/inventory",
//   asyncHandler(async (req, res) => {
//     await client.connect();
//     console.log("Successfully connected to Atlas");
//     const db = client.db("Food");
//     const col = db.collection("FoodInventory");
//     const items = await col.find().toArray();
//     res.json(items);
//   })
// );

// router.post(
//   "/archive",
//   asyncHandler(async (req, res) => {
//     await client.connect();
//     console.log("Successfully connected to Atlas");
//     const db = client.db("Food");
//     const col = db.collection("foodArchive");

//     // The data to insert should be in req.body
//     const data = {
//       date: new Date(),
//       data: req.body,
//     };

//     const result = await col.insertOne(data);
//     console.log(result);
//     res.json(result);
//   })
// );

// module.exports = router;

const express = require("express");
const router = express.Router();

// Require controller modules.
const food_controller = require("../controllers/foodController");

/// FOOD ROUTES ///

// GET request for creating Food item. NOTE This must come before route for id (i.e. display Food item).
router.get("/item/create", food_controller.item_create_get);

// POST request for creating Food item.
router.post("/item/create", food_controller.item_create_post);

// GET request to delete Food item.
router.get("/item/:id/delete", food_controller.item_delete_get);

// POST request to delete Food item.
router.post("/item/:id/delete", food_controller.item_delete_post);

// GET request to update Food item.
router.get("/item/:id/update", food_controller.item_update_get);

// POST request to update Food item.
router.post("/item/:id/update", food_controller.item_update_post);

// GET request for one Food item.
router.get("/item/:id", food_controller.item_detail);

// GET request for list of all Food items.
router.get("/items", food_controller.item_list);

// GET request for receiving archived data.
router.get("/archive", food_controller.archive_list);

// POST request for saving archived data.
router.post("/archive/create", food_controller.archive_create_post);

module.exports = router;
