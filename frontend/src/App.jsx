import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="app flex flex-col h-screen">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
