import React from "react";
import Header from "./Header";
import BottomNav from "./../BottomNav";
import "./../App.css";

function Home() {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2>Welcome to AgriFincaster</h2>
        <p>Your farming companion for budgeting, crop planning, and more!</p>
      </div>
      <BottomNav />
    </>
  );
}

export default Home;
