const Testimonial = require('../models/testimonials');

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const testimonial = new Testimonial(req.body);
        await testimonial.save();
        res.status(201).json({ success: true, data: testimonial });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single testimonial by ID
exports.getTestimonialById = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, error: 'Testimonial not found' });
        }
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!testimonial) {
            return res.status(404).json({ success: false, error: 'Testimonial not found' });
        }
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, error: 'Testimonial not found' });
        }
        res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
