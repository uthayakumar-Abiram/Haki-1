const express = require('express');
const { uploadImages, deleteImages } = require('../Controllers/uploadImgController.js');
const { protect, isAdmin } = require('../middleware/authMiddleware.js');
const { upload } = require('../middleware/image.js');
const router = express.Router();

router.post('/', protect, isAdmin, upload.array('images', 1), uploadImages);

router.delete('/delete-img/:id', protect, isAdmin, deleteImages);

module.exports = router;
