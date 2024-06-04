const mongoose = require('mongoose');

const TestimonialsSchema = new mongoose.Schema({
    testimonial: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Testimonials', TestimonialsSchema);
