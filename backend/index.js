const express = require('express');
const app = express();
const projectsRoutes = require('./routes/projects');
const servicesRoutes = require('./routes/services');
const experiencesRoutes = require('./routes/experiences');
const technologiesRoutes = require('./routes/technologies');
const testimonialsRoutes = require('./routes/testimonials');
const contactRoutes = require('./routes/contacts');
require('./configs/database')

// Middleware
app.use(express.json());
require('dotenv').config();

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/technologies', technologiesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});