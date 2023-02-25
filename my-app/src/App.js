import { useState } from "react";
import EventList from "./Eventlist";
import PrivateEventList from "./PrivEvent";
import './App.css' ;

function App() {
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = () => {
    setAuthorized(true);
  };

  const handleLogout = () => {
    setAuthorized(false);
  };

  return (
    <div className="Header">
      <h1 className="Welcome">Welcome to the Hack The North Events</h1>
      <button className="Header-Button" onClick={handleLogin} >Log in</button>
      {!authorized ? <EventList /> : <PrivateEventList authorized={true} />}
    </div>
  );
}

export default App;


