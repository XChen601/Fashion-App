import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./components/Wardrobe";
import "./App.css";
import LandingPage from "./components/Pages/LandingPage";
import StoryPage from "./components/Pages/StoryPage";
import TeamPage from "./components/Pages/TeamPage";
import Weather from "./components/Weather";


function App() {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Routes>
            <Route path="/StoryPage" element={<StoryPage />} />
          </Routes>
          <Routes>
            <Route path="/TeamPage" element={<TeamPage />} />
          </Routes>
          <Routes>
            <Route path="/wardrobe" element={<Wardrobe />} />
          </Routes>
          <Routes>
            <Route path="/Weather" element={<Weather />} />
          </Routes>
        </div>
      </Router>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    </div>

  );
}

export default App;
