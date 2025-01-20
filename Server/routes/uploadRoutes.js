const express = require("express");
const upload = require("../controllers/uploadController");
const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded!" });

  const filePath = `/uploads/images/${req.file.filename}`;
  return res.status(200).json({ message: "Upload successful!", filePath });
});

module.exports = router;
