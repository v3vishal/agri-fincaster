import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import './Layout.css'; // Ensure this file exists and is updated as shown below

// Import your images
import homeIcon from './smthn.png';
import weatherIcon from './weat.png';
import cropsIcon from './crop.png';
import reportsIcon from './report.png';
import financeIcon from './finance.png';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="header">
        <button className="signout-button" onClick={handleSignOut}>
          🔒 Sign Out
        </button>
        <h1 className="header-title">AgriFinCaster</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <img src={homeIcon} alt="Home" className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/weather" className="nav-item">
          <img src={weatherIcon} alt="Weather" className="nav-icon" />
          <span>Weather</span>
        </Link>
        <Link to="/crops" className="nav-item">
          <img src={cropsIcon} alt="Crops" className="nav-icon" />
          <span>Crops</span>
        </Link>
        <Link to="/reports" className="repnav-item">
          <img src={reportsIcon} alt="Reports" className="repnav-icon" />
          <span>Reports</span>
        </Link>
        <Link to="/finance" className="nav-item">
          <img src={financeIcon} alt="Finance" className="nav-icon" />
          <span>Financial Calculator</span>
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
