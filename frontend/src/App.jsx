import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/appBar/Header";
import MainContent from "./components/mainContent/MainContent";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <div className="app flex flex-col h-screen overflow-hidden">
              <Header />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 p-4 bg-background overflow-y-auto">
                  <MainContent />
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;