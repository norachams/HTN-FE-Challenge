import { useEffect, useState } from "react";
import './App.css';

function PrivateEventList({ authorized }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://api.hackthenorth.com/v3/events");
      const data = await res.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const filteredEvents = authorized
    ? events
    : events.filter((event) => event.privacy !== "private");

  return (
    <div className="event">
      {filteredEvents.map((event, index) => (
        <div key={event.id} className={`event-card event-${index % 3}`}>
          <div className="event-container">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Start Time: {new Date(event.start_time).toLocaleString()}</p>
          <p>End Time: {new Date(event.end_time).toLocaleString()}</p>
          <p>Event Type: {event.event_type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PrivateEventList;
