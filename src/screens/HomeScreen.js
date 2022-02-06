import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import TypeWriter from "react-typewriter";
import { useNavigate } from "react-router";
import { currentNav } from "../atoms/currentNavAtom";
import { useRecoilState } from "recoil";

function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentNavItem, setCurrentNavItem] = useRecoilState(currentNav);

  useEffect(() => setInterval(() => setLoading(false), 2000), []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {" "}
      <div className="backgroundHome">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <TypeWriter
              typing={0.6}
              className="text-6xl h-20 sm:text-9xl sm:h-32 font-bold text-[#65ccb8] -mt-20"
            >
              Ritu Singh
            </TypeWriter>
            <p className="text-white text-md sm:text-2xl foont-bold p-7 pb-10 sm:p-10 text-center">
              An educator who helps,inspire an encourage learners
              <br /> to make a positive impact in the world
            </p>
            <p
              onClick={() => {
                setCurrentNavItem("about");
                navigate("/about");
              }}
              className=" text-white px-10 hover:scale-110 transition-all duration-100 ease-linear py-4 border-2 rounded-full cursor-pointer hover:text-[#1a1a1d] hover:bg-[#e85a4f] text-xl hover:border-[#e85a4f]"
            >
              About me
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
