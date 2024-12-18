import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendarWithTimings = () => {
  const [events, setEvents] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("https://localhost:8000") // Replace with your API
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Transform API data to Big Calendar's event format
        const formattedEvents = data.map((item) => ({
          title: item.timings.join(", "), // Join timings as a title
          start: new Date(item.date + "T00:00:00"), // Use the date for start time
          end: new Date(item.date + "T23:59:59"), // Entire day span (or adjust as needed)
        }));
        setEvents(formattedEvents);
      });
  }, []);

  return (
    <div style={{ height: "50vh", margin: "20px" }}>
      <h1>React Big Calendar with Timings</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={["month", "week", "day"]} // Enable different views
        popup={true} // Show event details in a popup on click
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: "#3174ad",
            color: "white",
          },
        })}
      />
    </div>
  );
};

export default BigCalendarWithTimings;
