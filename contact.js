const express = require('express');
const router = express.Router();

// Example: Get all contact form submissions
router.get('/', (req, res) => {
  // Simulating a response
  res.json({ message: 'List of contact form submissions' });
});

// Example: Submit a contact form
router.post('/', (req, res) => {
  const { name, email, message } = req.body; // Expecting name, email, and message
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  // Save the contact form data to the database (Simulation)
  res.json({ message: 'Contact form submitted successfully', data: { name, email, message } });
});

module.exports = router;
