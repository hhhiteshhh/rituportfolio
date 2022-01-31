import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";

function AchievementsScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setInterval(() => setLoading(false), 2000), []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default AchievementsScreen;
