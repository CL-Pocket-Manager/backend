const { Distributor } = require("../models/distributor");

// Get all Distributors
exports.distributor_list = async (req, res, next) => {
  const distributors = await Distributor.find({}, "id name"); // Select only the id and name fields
  res.json(distributors);
};

// Create a new Distributor
exports.distributor_create = async (req, res, next) => {
  const distributor = new Distributor({
    name: req.body.name,
    website: req.body.website,
    contact: {
      name: req.body.contactName,
      email: req.body.contactEmail,
      phone: req.body.contactPhone,
    },
  });

  const savedDistributor = await distributor.save();

  if (!savedDistributor) {
    return next(new Error("Failed to save distributor"));
  }

  res.status(201).json(savedDistributor);
};
