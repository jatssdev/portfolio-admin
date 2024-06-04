const express = require('express');
const router = express.Router();
const ExperiencesController = require('../controllers/ExperiencesController');

// Create a new experience
router.post('/', ExperiencesController.createExperience);

// Get all experiences
router.get('/', ExperiencesController.getAllExperiences);

// Get a single experience by ID
router.get('/:id', ExperiencesController.getExperienceById);

// Update an experience by ID
router.put('/:id', ExperiencesController.updateExperience);

// Delete an experience by ID
router.delete('/:id', ExperiencesController.deleteExperience);

module.exports = router;
