const mongoose = require('mongoose');

const TechnologiesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Technologies', TechnologiesSchema);
