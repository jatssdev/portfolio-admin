const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/ProjectsController');

// Create a new project
router.post('/', ProjectsController.createProject);

// Get all projects
router.get('/', ProjectsController.getAllProjects);

// Get a single project by ID
router.get('/:id', ProjectsController.getProjectById);

// Update a project by ID
router.put('/:id', ProjectsController.updateProject);

// Delete a project by ID
router.delete('/:id', ProjectsController.deleteProject);

module.exports = router;
