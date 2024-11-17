import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../login.css"; // Importing the CSS file

function Register() {
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

  const handleRegister = async () => {
    try {
      const trimmedUsername = username.trim();
      if (trimmedUsername === "") {
        alert("Please enter a valid username.");
        return;
      }

      const usersDb = collection(db, "users");

      // Check if the username already exists
      const q = query(usersDb, where("username", "==", trimmedUsername));
      const qS = await getDocs(q);

      if (!qS.empty) {
        alert("Username already exists!");
        return;
      }

      // Create a dummy email for Firebase Authentication
      const dummyEmail = `${trimmedUsername.replace(/\s+/g, "_")}@agfc.in`;

      // Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, dummyEmail, password);

      // Save the username in Firestore
      const userRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userRef, {
        username: trimmedUsername,
        createdAt: new Date().toISOString(),
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Farmer Registration</h2>
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
      <button onClick={handleRegister} className="login-button">
        Register
      </button>
    </div>
  );
}

export default Register;
