const express = require("express");
const {
  authenticate,
  authorizeListingOwner,
} = require("../middleware/authMiddleware");
const Listing = require("../models/listingModel"); // Assuming you have a Listing model
const router = express.Router();

// Create a new listing
exports.addListing = async (req, res) => {
  try {
    const { title, photos, description, price, condition, method, location } =
      req.body;

    const newListing = await Listing.create({
      title,
      photos,
      description,
      price,
      condition,
      method,
      location,
      ownerId: req.user.id,
    });
    res.status(201).json(newListing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" + err });
  }
};

// Edit an existing listing
exports.editListing = async (req, res) => {
  const { listingId } = req.params;
  const { title, description, price, location } = req.body;

  try {
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    listing.title = title || listing.title;
    listing.description = description || listing.description;
    listing.price = price || listing.price;
    listing.location = location || listing.location;

    await listing.save();
    res.status(200).json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a listing
exports.deleteListing = async (req, res) => {
  const { listingId } = req.params;

  try {
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    await listing.destroy();
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getListing = async (req, res) => {
  const { listingId } = req.params;

  try {
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getListingByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const listings = await Listing.findAll({ where: { ownerId: userId } });

    res.status(200).json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
