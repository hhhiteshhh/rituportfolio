import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Call from "../components/Call";
import Work from "../components/Work";
import Achievements from "../components/Achievements";

function AchievementsScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setInterval(() => setLoading(false), 2000), []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="backgroundAchievements">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl h-20 sm:text-5xl sm:h-32 font-bold text-white">
              My Achievements
            </h1>
            <br />
            <br />
            <h1 className="text-xl h-20 sm:text-3xl sm:h-32 font-bold text-white">
              Drive Results
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Work />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Achievements />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Call />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Footer />
    </div>
  );
}

export default AchievementsScreen;
