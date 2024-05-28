const express = require("express");
const cors = require("cors");
const foodRouter = require("./routes/food");
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// Define the database URL to connect to.

const mongoDB =
  "mongodb+srv://chleighton1:qSsEYn1hrF616vLN@cluster0.ingruox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
