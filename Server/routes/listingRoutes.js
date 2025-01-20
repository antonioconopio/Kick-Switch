const express = require("express");
const {
  addListing,
  editListing,
  deleteListing,
  getListing,
  getListingByUser,
} = require("../controllers/listingController");
const {
  authenticate,
  authorizeListingOwner,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/listings", authenticate, addListing);
router.put(
  "/listings/:listingId",
  authenticate,
  authorizeListingOwner,
  editListing
);
router.delete(
  "/listings/:listingId",
  authenticate,
  authorizeListingOwner,
  deleteListing
);

router.get("/listings/:listingId", authenticate, getListing);
router.get("/listings/user/:userId", authenticate, getListingByUser);

module.exports = router;
