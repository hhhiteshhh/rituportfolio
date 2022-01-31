import React from "react";
import { useNavigate } from "react-router";
import { currentNav } from "../atoms/currentNavAtom";
import { useRecoilState } from "recoil";

function Footer() {
  const navigate = useNavigate();
  const [currentNavItem, setCurrentNavItem] = useRecoilState(currentNav);

  return (
    <footer className="space-y-5 bg-[#1a1a1d] py-4 h-96 relative items-center justify-center flex  ">
      <div className="flex flex-1 items-center justify-center flex-col md:flex-row flex-wrap max-w-4xl mx-6 -mt-20">
        <div
          onClick={() => {
            setCurrentNavItem("home");
            navigate("/");
          }}
          className="link link-underline link-underline-black text-white w-full text-center mx-auto p-4 cursor-pointer sm:w-80"
        >
          HOME
        </div>
        <div
          onClick={() => {
            setCurrentNavItem("achievements");
            navigate("/achievements");
          }}
          className="link link-underline link-underline-black text-white w-full text-center mx-auto p-4 cursor-pointer sm:w-80"
        >
          ACHIEVEMENTS
        </div>
        <div
          onClick={() => {
            setCurrentNavItem("about");
            navigate("/about");
          }}
          className="link link-underline link-underline-black text-white w-full text-center mx-auto p-4 cursor-pointer sm:w-80"
        >
          ABOUT
        </div>
        <div
          onClick={() => {
            setCurrentNavItem("contact");
            navigate("/contact");
          }}
          className="link link-underline link-underline-black text-white w-full text-center mx-auto p-4 cursor-pointer sm:w-80"
        >
          CONTACT
        </div>
      </div>
      <div className="h-[0.8px] bg-[#4e4e50] absolute bottom-10 w-full"></div>
      <h1 className="absolute bottom-2 mx-auto w-full text-center text-[#4e4e50]">
        © 2022
      </h1>
    </footer>
  );
}

export default Footer;
