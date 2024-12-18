import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(''); // For storing filter input
  const navigate = useNavigate();
  // Fetch student data from the API
  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then((response) => {
        setStudents(response.data);  // Update students state with the data
        setFilteredStudents(response.data); // Set filtered students initially as all students
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log("Error occurred:", err);
        setLoading(false);  // Set loading to false even on error
      });
  }, []);

  // Handle filter input change
  const handleFilterChange = (event) => {
    const keyword = event.target.value;
    setFilter(keyword);

    // Filter the students based on the input keyword
    const filteredList = students.filter((student) => {
      return (
        student.Name.toLowerCase().includes(keyword.toLowerCase()) ||
        student.Country.toLowerCase().includes(keyword.toLowerCase()) ||
        student.Email.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    // Update filtered students list
    setFilteredStudents(filteredList);
  };

  if (loading) {
    return <div>Loading...</div>;  // Show a loading state while data is being fetched
  }

  return (
    <>
      <div className='w-1/4 ml-auto'>
        <button onClick={() => { navigate('/admindash/addstudents') }} className='p-2 bg-green-500 text-white rounded-md hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
          Add Student
        </button>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-center mb-4">Student List</h2>

        {/* Filter Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Name, Country, or Email"
            value={filter}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Table displaying the students */}
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">DOB</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.Id} className="border-b">
                  <td className="px-4 py-2">{student.Name}</td>
                  <td className="px-4 py-2">{new Date(student.Dob).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{student.Country}</td>
                  <td className="px-4 py-2">{student.Email}</td>
                  <td className="px-4 py-2">{student.Mobile}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
