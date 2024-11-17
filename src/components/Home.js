import React, { useEffect, useState } from "react";
import "../Layout.css";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Home() {
  const [username, setUsername] = useState(""); // State to store the username

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        // Check if the user is logged in
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userRef = doc(db, "users", currentUser.uid); // Reference to the user's Firestore document
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUsername(userData.username); // Set the username from Firestore data
          } else {
            console.error("No user document found in Firestore!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2>Welcome to AgriFincaster, {username || "User"}!</h2>
        <p>Your farming companion for budgeting, crop planning, and more!</p>
      </div>
    </>
  );
}

export default Home;
