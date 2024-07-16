const { Distributor } = require("../models/distributor");

exports.distributor_add = async (req, res) => {
  const { name } = req.body;
  try {
    let distributor = await Distributor.findOne({ name });
    if (distributor) {
      return res.status(400).json({ msg: "Distributor already exists" });
    }
    distributor = new Distributor({ name });
    await distributor.save();
    res.json(distributor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.distributor_list = async (req, res, next) => {
  const distributors = await Distributor.find({}, "id name"); // Select only the id and name fields
  res.json(distributors);
};
