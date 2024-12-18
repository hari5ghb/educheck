// controllers/studentController.js
const db = require('../config/db');

// Add a new student
const addStudent = (req, res) => {
  const { name, dob, country, email, phone } = req.body;
  const query = "INSERT INTO students (name, dob, country, email, mobile) VALUES (?, ?, ?, ?, ?)";
  
  db.query(query, [name, dob, country, email, phone], (err, result) => {
    if (err) {
      console.error("Database Error:", err); // Log detailed database error
      return res.status(500).send("Failed to add student.");
    }
    res.status(200).send("Student added successfully.");
  });
};


// Get all students
const getStudents = (req, res) => {
  const query = "SELECT * FROM students";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      return res.status(500).send("Failed to fetch students.");
    }
    res.status(200).json(results);
  });
};

module.exports = {addStudent, getStudents }