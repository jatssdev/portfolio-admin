const express = require('express');
const router = express.Router();
const TechnologiesController = require('../controllers/TechnologiesController');

// Create a new technology
router.post('/', TechnologiesController.createTechnology);

// Get all technologies
router.get('/', TechnologiesController.getAllTechnologies);

// Get a single technology by ID
router.get('/:id', TechnologiesController.getTechnologyById);

// Update a technology by ID
router.put('/:id', TechnologiesController.updateTechnology);

// Delete a technology by ID
router.delete('/:id', TechnologiesController.deleteTechnology);

module.exports = router;
