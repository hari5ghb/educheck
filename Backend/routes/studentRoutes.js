// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const { addStudent, getStudents} = require('../controllers/studentController');

// POST /addStudent - Add a new student
router.post('/addStudent', addStudent);

// GET /students - Get all students
router.get('/students', getStudents);

module.exports = router;
