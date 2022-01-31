import React from "react";
import { useNavigate } from "react-router";
import { currentNav } from "../atoms/currentNavAtom";
import { useRecoilState } from "recoil";
function Header() {
  const navigate = useNavigate();
  const [currentNavItem, setCurrentNavItem] = useRecoilState(currentNav);

  return (
    <div
      className={`flex flex-1 flex-grow items-center justify-center space-x-5 sticky top-0 z-50  p-2 lg:px-5 shadow-xl bg-[#222629]`}
    >
      <h1
        onClick={() => {
          setCurrentNavItem("home");
          navigate("/");
        }}
        className={`${
          currentNavItem === "home" ? "text-[#e85a4f]" : "text-white"
        } cursor-pointer hover:scale-105 px-5`}
      >
        HOME
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("achievements");
          navigate("/achievements");
        }}
        className={`${
          currentNavItem === "achievements" ? "text-[#e85a4f]" : "text-white"
        } cursor-pointer hover:scale-105 px-5`}
      >
        ACHIEVEMENTS
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("about");
          navigate("/about");
        }}
        className={`${
          currentNavItem === "about" ? "text-[#e85a4f]" : "text-white"
        } cursor-pointer hover:scale-105 px-5`}
      >
        ABOUT
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("contact");
          navigate("/contact");
        }}
        className={`${
          currentNavItem === "contact" ? "text-[#e85a4f]" : "text-white"
        } cursor-pointer hover:scale-105 px-5`}
      >
        CONTACT
      </h1>
    </div>
  );
}

export default Header;
