import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/appBar/Header";

function App() {
  return (
    <Router>
      <div className="app flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;