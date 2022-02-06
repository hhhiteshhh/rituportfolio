import React, { useState, useEffect } from "react";
import Aim from "../components/Aim";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Skills from "../components/Skills";
import Call from "../components/Call";

function AboutScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setInterval(() => setLoading(false), 2000), []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="backgroundAbout">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl h-20 sm:text-5xl sm:h-32 font-semibold text-[#65ccb8]">
              Hi I'm Ritu Singh
            </h1>
          </div>
        </div>
      </div>
      <Aim />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Education />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Skills />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Call />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Footer />
    </div>
  );
}

export default AboutScreen;
