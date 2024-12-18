import React, { useState, useEffect } from "react";

const ClassReportForm = () => {
  // Get today's date in 'YYYY-MM-DD' format
  const today = new Date().toISOString().split("T")[0];

  // Set initial form data
  const [formData, setFormData] = useState({
    date: today, // Default date to today's date
    startTime: "",
    endTime: "",
    subject: "",
    sessionType: "one-on-one",
    Batch: "",
    lesson: "",
    homework: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Start Time change and automatically calculate End Time
  const handleStartTimeChange = (e) => {
    const newStartTime = e.target.value;
    const newEndTime = calculateEndTime(newStartTime);
    setFormData({ ...formData, startTime: newStartTime, endTime: newEndTime });
  };

  // Function to calculate End Time (add one hour to Start Time)
  const calculateEndTime = (startTime) => {
    const [hours, minutes] = startTime.split(":").map(Number);
    const endDate = new Date();
    endDate.setHours(hours + 1, minutes); // Add 1 hour to start time
    return endDate.toTimeString().split(" ")[0].substring(0, 5); // Format as HH:MM
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Report Submitted:", formData);
    alert("Class Report Submitted Successfully!");
    // Reset the form while keeping the default date
    setFormData({
      date: today,
      startTime: "",
      endTime: "",
      subject: "",
      lesson: "",
      homework: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Class Report Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <label htmlFor="startTime" className="block text-gray-700 font-medium mb-2">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleStartTimeChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        {/* End Time */}
        <div className="mb-4">
          <label htmlFor="endTime" className="block text-gray-700 font-medium mb-2">
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter Subject"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sessionType" className="block text-gray-700 font-medium mb-2">
            Session Type
          </label>
          <select
            id="sessionType"
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          >
            <option value="one-on-one">One-on-One</option>
            <option value="group">Group</option>
          </select>
        </div>

        {/* Conditional Dropdown for "Batch" (only if "One-on-One" is selected) */}
        {formData.sessionType === "one-on-one" && (
          <div className="mb-4">
            <label htmlFor="batchType" className="block text-gray-700 font-medium mb-2">
              Batch Type
            </label>
            <select
              id="batchType"
              name="batchType"
              value={formData.batchType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            >
              <option value="">Select Batch 1-1</option>
              <option value="batch-1">Batch 1</option>
              <option value="batch-2">Batch 2</option>
              <option value="batch-3">Batch 3</option>
            </select>
          </div>
        )
          || formData.sessionType === "group" &&  (
            <div className="mb-4">
              <label htmlFor="batchType" className="block text-gray-700 font-medium mb-2">
                Batch Type
              </label>
              <select
                id="batchType"
                name="batchType"
                value={formData.batchType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              >
                <option value="">Select Batch group</option>
                <option value="batch-1">Batch 1</option>
                <option value="batch-2">Batch 2</option>
                <option value="batch-3">Batch 3</option>
              </select>
            </div>
        )}


        {/* Lesson */}
        <div className="mb-4">
          <label htmlFor="lesson" className="block text-gray-700 font-medium mb-2">
            Lesson
          </label>
          <textarea
            id="lesson"
            name="lesson"
            value={formData.lesson}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter Lesson Details"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Homework */}
        <div className="mb-4">
          <label htmlFor="homework" className="block text-gray-700 font-medium mb-2">
            Homework
          </label>
          <textarea
            id="homework"
            name="homework"
            value={formData.homework}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter Homework Details"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ClassReportForm;
