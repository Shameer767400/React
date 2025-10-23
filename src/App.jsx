import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PopulationDashboard from "./populationdashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <PopulationDashboard />
      </div>
    </div>
  );
}

export default App;
