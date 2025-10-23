import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        <li className="dashboard-sidebar">📊 Dashboard</li>
        <li>❓ Help</li>
      </ul>
    </aside>
  );
}
