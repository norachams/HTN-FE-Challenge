import React from "react";
import "./App.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Start Time: {new Date(event.start_time).toLocaleString()}</p>
      <p>End Time: {new Date(event.end_time).toLocaleString()}</p>
      <p>Event Type: {event.event_type}</p>
    </div>
  );
}

export default EventCard;

