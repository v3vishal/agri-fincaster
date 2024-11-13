import React, { useState } from "react";

function Weather() {
  const [location, setLocation] = useState("");

  return (
    <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2>Weather</h2>
      <input 
        type="text" 
        placeholder="Enter location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={() => console.log("Location:", location)}>Confirm</button>
    </div>
  );
}

export default Weather;
