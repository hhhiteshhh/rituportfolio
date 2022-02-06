import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import AchievementsScreen from "./screens/AchievementsScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="max-w-8xl mx-auto overflow-x-hidden ">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route
              exact
              path="/achievements"
              element={<AchievementsScreen />}
            />
            <Route exact path="/contact" element={<ContactScreen />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
