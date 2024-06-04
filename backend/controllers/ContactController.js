const Message = require('../models/contact');  // Adjust the path as needed
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');
require('dotenv').config();  // Load environment variables

const ContactHandler = async (req, res, next) => {
    console.log(req.body)
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    try {
        // Store the message in the database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Read and compile the email templates
        const userTemplateSource = fs.readFileSync(path.join(__dirname, '../templates/userEmailTemplate.html'), 'utf8');
        const adminTemplateSource = fs.readFileSync(path.join(__dirname, '../templates/adminEmailTemplate.html'), 'utf8');

        const userTemplate = handlebars.compile(userTemplateSource);
        const adminTemplate = handlebars.compile(adminTemplateSource);

        const userHtml = userTemplate({ name });
        const adminHtml = adminTemplate({ name, email, message });

        // Set up Nodemailer transporter using environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Set up email options for user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We have received your message',
            html: userHtml
        };

        // Set up email options for admin
        const adminMailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'Contact Form Submission',
            html: adminHtml
        };

        // Send emails
        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(adminMailOptions);

        res.status(200).json({ success: true, message: 'Email sent successfully and details stored in the database' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

module.exports = { ContactHandler };
