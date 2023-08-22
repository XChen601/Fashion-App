import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Wardrobe from "./components/Wardrobe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
