import { useEffect, useState } from "react";
import "./App.css";
import EventCard from "./EventCard";
import PrivateEventCard from "./PrivEvent";

function EventList({ authorized }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
      events.sort((a, b) => a.start_time - b.start_time);
  }, []);

  const filteredEvents = authorized
    ? events
    : events.filter((event) => event.privacy !== "private");

  return (
    <div className="event-list">
      {filteredEvents.map((event, index) => (
        <div key={event.id} className={`event-container event-${index % 3}`}>
          {authorized ? (
            <PrivateEventCard event={event} />
          ) : (
            <EventCard event={event} />
          )}
        </div>
      ))}
    </div>
  );
}

export default EventList;

