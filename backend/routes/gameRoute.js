const express = require('express');
const router = express.Router();
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, rating } = require('../Controllers/gameController.js');
const { getBill } = require('../Controllers/ appController.js');
const { isAdmin, protect } = require('../middleware/authMiddleware.js');
const { upload } = require('../middleware/image.js');
const { uploadImages, deleteImages } = require('../Controllers/uploadImgController.js');

router.post("/", protect, isAdmin, upload.array("images", 1), createProduct);
router.post("/bill", getBill);
router.get("/:id", getaProduct);
router.put("/rating", protect, rating);
router.put("/:id", protect, isAdmin, updateProduct);
router.delete("/:id", protect, isAdmin, deleteProduct);
router.get("/", getAllProduct);

module.exports = router;
