import React, { useState, useEffect } from "react";

const Events = () => {
  // State for events
  const [events, setEvents] = useState([]);

  // Load events from localStorage on page load
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Function to add a new event
  const addEvent = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const category = e.target.category.value;

    if (!title || !date || !category) return;

    const newEvent = { title, date, category, location: "Not Specified" };
    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents); // Update state
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Save to localStorage

    e.target.reset(); // Clear form after submission
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Events Listing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-xl">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.date} | {event.location}</p>
            <p className="text-sm text-gray-500">{event.category}</p>
          </div>
        ))}
      </div>

      <form className="mt-8 p-4 bg-gray-100 shadow-md rounded-lg" onSubmit={addEvent}>
        <h2 className="text-xl font-bold mb-2">Add New Event</h2>
        <input className="block w-full p-2 mb-2 border" name="title" placeholder="Event Title" required />
        <input className="block w-full p-2 mb-2 border" name="date" type="date" required />
        <select className="block w-full p-2 mb-2 border" name="category" required>
          <option>Religious</option>
          <option>Social</option>
          <option>Charity</option>
        </select>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Event</button>
      </form>
    </div>
  );
};

export default Events;
