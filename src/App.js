import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Wardrobe from "./components/Wardrobe";
import Navigation from "./components/Navigation";
import {Helmet} from "react-helmet"
function App() {
  return (
    <div>
      <Router>
      <div>
        <Helmet>
        <title>PerfectFit.com</title>
        </Helmet>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
        </Routes>
      </div>
      </Router>
    </div>
    
  );
}

export default App;
