import React, { useState } from 'react';

const GroupManagement = () => {
  const [instructors, setInstructors] = useState(['Instructor A', 'Instructor B']); // Sample instructors
  const [students, setStudents] = useState(['Student 1', 'Student 2', 'Student 3']); // Sample students
  const [groupName, setGroupName] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [sessionType, setSessionType] = useState('group'); // 'group' or 'one-on-one'

  // Add a new schedule entry
  const handleAddSchedule = () => {
    if (!selectedInstructor || (sessionType === 'group' && !groupName)) {
      alert('Please fill all required fields.');
      return;
    }
    if (sessionType === 'group' && selectedStudents.length === 0) {
      alert('Please select at least one student for the group.');
      return;
    }
    if (sessionType === 'one-on-one' && selectedStudents.length !== 1) {
      alert('Please select exactly one student for a one-on-one session.');
      return;
    }

    const newSchedule = {
      sessionType,
      instructor: selectedInstructor,
      students: [...selectedStudents],
      groupName: sessionType === 'group' ? groupName : '',
    };

    setSchedule((prev) => [...prev, newSchedule]);
    alert('Class scheduled successfully!');
    clearForm();
  };

  // Clear form fields after scheduling
  const clearForm = () => {
    setGroupName('');
    setSelectedInstructor('');
    setSelectedStudents([]);
    setSessionType('group');
  };

  // Handle student selection
  const toggleStudentSelection = (student) => {
    setSelectedStudents((prev) =>
      prev.includes(student) ? prev.filter((s) => s !== student) : [...prev, student]
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Group & One-on-One Management</h2>

      {/* Session Type Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Session Type</label>
        <select
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="group">Group</option>
          <option value="one-on-one">One-on-One</option>
        </select>
      </div>

      {/* Group Name Input (Only for Group Session) */}
      {sessionType === 'group' && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter Group Name"
          />
        </div>
      )}

      {/* Select Instructor */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select Instructor</label>
        <select
          value={selectedInstructor}
          onChange={(e) => setSelectedInstructor(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="">-- Select an Instructor --</option>
          {instructors.map((instructor, index) => (
            <option key={index} value={instructor}>
              {instructor}
            </option>
          ))}
        </select>
      </div>

      {/* Select Students */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select Students</label>
        <div className="grid grid-cols-2 gap-2">
          {students.map((student, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                value={student}
                checked={selectedStudents.includes(student)}
                onChange={() => toggleStudentSelection(student)}
                className="mr-2"
              />
              {student}
            </label>
          ))}
        </div>
      </div>

      {/* Add Schedule Button */}
      <button
        onClick={handleAddSchedule}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Schedule Class
      </button>

      {/* Scheduled Classes List */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">Scheduled Classes</h3>
        {schedule.length === 0 ? (
          <p className="text-gray-500">No classes scheduled yet.</p>
        ) : (
          <ul className="list-disc pl-6">
            {schedule.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.sessionType === 'group' ? 'Group Class' : 'One-on-One'}</strong> with{' '}
                <strong>{item.instructor}</strong>
                {item.sessionType === 'group' && ` (Group: ${item.groupName})`} - Students:{' '}
                {item.students.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GroupManagement;
