const express = require('express');
const { makePayment } = require('../Controllers/paymantController.js');
const { protect, isAdmin } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.route('/checkout').post(protect, makePayment);

module.exports = router;
