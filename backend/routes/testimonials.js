const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/TestimonialsController');

// Create a new testimonial
router.post('/', TestimonialsController.createTestimonial);

// Get all testimonials
router.get('/', TestimonialsController.getAllTestimonials);

// Get a single testimonial by ID
router.get('/:id', TestimonialsController.getTestimonialById);

// Update a testimonial by ID
router.put('/:id', TestimonialsController.updateTestimonial);

// Delete a testimonial by ID
router.delete('/:id', TestimonialsController.deleteTestimonial);

module.exports = router;
