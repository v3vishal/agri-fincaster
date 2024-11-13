import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function BottomNav() {
  return (
    <nav>
      <Link to="/home" className="icon">
        🏠 <span>Home</span>
      </Link>
      <Link to="/weather" className="icon">
        🌤️ <span>Weather</span>
      </Link>
      <Link to="/crops" className="icon">
        🌱 <span>Crops</span>
      </Link>
      <Link to="/reports" className="icon">
        📊 <span>Reports</span>
      </Link>
      <Link to="/finance" className="icon">
        💰 <span>Finance</span>
      </Link>
    </nav>
  );
}

export default BottomNav;
