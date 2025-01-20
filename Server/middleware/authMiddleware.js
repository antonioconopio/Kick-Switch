const jwt = require("jsonwebtoken");
const Listing = require("../models/listingModel");

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid." });
  }
};

exports.authorizeListingOwner = async (req, res, next) => {
  const { listingId } = req.params;

  try {
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.ownerId !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to modify this listing" });
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
