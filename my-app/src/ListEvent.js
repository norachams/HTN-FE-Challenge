import { useEffect, useState } from "react";

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
    <div>
      {filteredEvents.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Start Time: {new Date(event.start_time).toLocaleString()}</p>
          <p>End Time: {new Date(event.end_time).toLocaleString()}</p>
          <p>Event Type: {event.event_type}</p>
        </div>
      ))}
    </div>
  );
}

export default PrivateEventList;

