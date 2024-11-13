import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Crops from "./components/Crops";
import Reports from "./components/Reports";
import Finance from "./components/Finance";
import { auth } from "./firebase";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((authUser) => {
    setUser(authUser)
    console.log("User Signed in")
  });
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
  );
}

export default App;