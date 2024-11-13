import React, { useState } from "react";

function Crops() {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2>Crops</h2>
      <input 
        type="text" 
        placeholder="Crop name" 
        value={cropName} 
        onChange={(e) => setCropName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <button onClick={() => console.log("Crop data:", cropName, quantity)}>Confirm</button>
    </div>
  );
}

export default Crops;
