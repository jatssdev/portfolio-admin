const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/ServicesController');

// Create a new service
router.post('/', ServicesController.createService);

// Get all services
router.get('/', ServicesController.getAllServices);

// Get a single service by ID
router.get('/:id', ServicesController.getServiceById);

// Update a service by ID
router.put('/:id', ServicesController.updateService);

// Delete a service by ID
router.delete('/:id', ServicesController.deleteService);

module.exports = router;
