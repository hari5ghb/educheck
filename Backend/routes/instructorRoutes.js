// routes/instructorRoutes.js
const express = require('express');
const router = express.Router();
const { addInstructor, getInstructors }= require('../controllers/instructorController');

// POST /addInstructor - Add a new instructor
router.post('/addInstructor', addInstructor);

// GET /instructors - Get all instructors
router.get('/instructors', getInstructors);

module.exports = router;
