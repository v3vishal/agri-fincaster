import React, { useState } from "react";

function Finance() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");

  return (
    <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2>Finance</h2>
      <input 
        type="number" 
        placeholder="Income" 
        value={income} 
        onChange={(e) => setIncome(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Expenses" 
        value={expenses} 
        onChange={(e) => setExpenses(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Savings" 
        value={savings} 
        onChange={(e) => setSavings(e.target.value)} 
      />
      <button onClick={() => console.log("Finance Data:", income, expenses, savings)}>Confirm</button>
    </div>
  );
}

export default Finance;
