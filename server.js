const express = require("express");
const cors = require("cors");
const foodRouter = require("./routes/food");
const itemRouter = require("./routes/items");
const inventoryRouter = require("./routes/inventory");
const distributorRouter = require("./routes/distributor");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// Define the database URL to connect to.

const mongoDB = process.env.MONGODB_URI;

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected to Atlas");
}

const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use("/food", foodRouter);
app.use("/items", itemRouter);
app.use("/inventory", inventoryRouter);
app.use("/distributor", distributorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
