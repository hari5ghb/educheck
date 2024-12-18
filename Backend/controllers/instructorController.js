const db = require('../config/db');
const bcrypt = require('bcrypt');
const InstructorRole = 2;

const addInstructor = (req, res) => {
  const { name, dob, location, username, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).send("Failed to add instructor.");
    }

    // Insert into users table
    const query1 = `INSERT INTO users (Username, Password, Role) VALUES (?, ?, ?)`;
    db.query(query1, [username, hashedPassword, InstructorRole], (err, result) => {
      if (err) {
        console.error("Error adding user:", err);
        return res.status(500).send("Failed to add instructor.");
      }

      // Retrieve the generated UserId
      const userId = result.insertId;

      // Insert into instructors table
      const query2 = "INSERT INTO instructors ( UserId, name, dob, location) VALUES (?, ?, ?, ?)";
      db.query(query2, [userId, name, dob, location], (err, result) => {
        if (err) {
          console.error("Error adding instructor:", err);
          return res.status(500).send("Failed to add instructor.");
        }

        res.status(200).send("Instructor added successfully.");
      });
    });
  });
};

// Get all instructors
const getInstructors = (req, res) => {
  const query = "SELECT * FROM instructors";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching instructors:", err);
      return res.status(500).send("Failed to fetch instructors.");
    }
    res.status(200).json(results);
  });
};

module.exports = { addInstructor, getInstructors };
