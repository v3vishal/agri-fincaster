import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../login.css"; // Importing the CSS file
import "../Layout.css"; // Importing the CSS file
import homeIcon from '../logo.png';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const trimmedUsername = username.trim();
      if (trimmedUsername === "") {
        alert("Please enter a valid username.");
        return;
      }

      const usersDb = collection(db, "users");

      // Query Firestore to check if the username exists
      const q = query(usersDb, where("username", "==", trimmedUsername));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("No account found with this username!");
        return;
      }

      // Create the dummy email from the username
      const dummyEmail = `${trimmedUsername.replace(/\s+/g, "_")}@agfc.in`;

      // Attempt to log in with Firebase Authentication
      await signInWithEmailAndPassword(auth, dummyEmail, password);

      alert("Login successful!");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found with the provided username.");
      } else {
        alert("Login Failed: " + error.message);
      }
    }
  };

  return (
    <div className="login-container">
      
      <div className="image-container">
      <img src={homeIcon} alt="Home" className="logo" />
      </div>
      
      <div className="login-input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
      </div>
      <div className="login-input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <button onClick={() => navigate("/register")} className="signup-button">
        Register
      </button>
      
      
      <h1 className="watermark">Website created with ❤️ by Vihaan©️</h1>

      <h1 className="watermark5">Jai Jawan Jai Kisan</h1>
    </div>
  );
}

export default Login;
