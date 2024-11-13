import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Reports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      const reportCollection = collection(db, "reports");
      const reportSnapshot = await getDocs(reportCollection);
      const reportList = reportSnapshot.docs.map((doc) => doc.data().name);
      setReports(reportList);
    };

    fetchReports();
  }, []);

  return (
    <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }}>
      <h2>Reports</h2>
      <select 
        value={selectedReport} 
        onChange={(e) => setSelectedReport(e.target.value)}
      >
        <option value="" disabled>Select a report</option>
        {reports.map((report, index) => (
          <option key={index} value={report}>{report}</option>
        ))}
      </select>
      <button onClick={() => console.log("Selected Report:", selectedReport)}>Confirm</button>
    </div>
  );
}

export default Reports;
