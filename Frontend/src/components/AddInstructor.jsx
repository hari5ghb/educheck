import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddInstructor = () => {
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState({
    name: '',
    dob: '',
    location: '',
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInstructor({ ...instructor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Send the instructor data to your backend API
      const response = await axios.post('http://localhost:5000/api/addInstructor', instructor);
      
      // Redirect to the instructor list after successful submission
      navigate('/admindash/instructor');
    } catch (err) {
      setError('Failed to add instructor. Please try again.');
      console.error("Error adding instructor:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-1/4 ml-auto">
        <button 
          onClick={() => { navigate('/admindash/instructor') }} 
          className="p-2 bg-blue-500 text-white rounded-md hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          View Instructors
        </button>
      </div>
      
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Instructor</h2>
        
        {/* Show error message if there is one */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={instructor.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
                type="date"
                name="dob"
                id="dob"
                value={instructor.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 text-gray-500 pl-6"
              />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={instructor.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={instructor.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={instructor.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading} // Disable the button while loading
              className={`px-6 py-2 ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            >
              {loading ? 'Adding...' : 'Add Instructor'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddInstructor;
