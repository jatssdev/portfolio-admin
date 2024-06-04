const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Services', ServicesSchema);
