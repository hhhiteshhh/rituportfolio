import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import AchievementsScreen from "./screens/AchievementsScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="max-w-8xl mx-auto ">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route exact path="/about" element={<AboutScreen />} />
            <Route
              exact
              path="/achievements"
              element={<AchievementsScreen />}
            />
            <Route exact path="/contact" element={<ContactScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
