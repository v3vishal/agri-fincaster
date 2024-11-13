import React from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    
    navigate("/");
  };

  return (
    <header className="header">
      <button onClick={handleSignOut} className="signout-button">🔒 Sign Out</button>
    </header>
  );
}

export default Header;
