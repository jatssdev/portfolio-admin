const express = require('express');
const router = express.Router();
const { ContactHandler } = require('../controllers/ContactController');

// Route to handle contact form submissions
router.post('/', ContactHandler);

module.exports = router;
