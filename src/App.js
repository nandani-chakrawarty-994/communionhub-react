import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">CommunionHub</h1>
        <nav>
          <Link to="/" className="px-3">Home</Link>
          <Link to="/events" className="px-3">Events</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
