import React from "react";
import { useNavigate } from "react-router";
import { currentNav } from "../atoms/currentNavAtom";
import { useRecoilState } from "recoil";
function Header() {
  const navigate = useNavigate();
  const [currentNavItem, setCurrentNavItem] = useRecoilState(currentNav);

  return (
    <div
      className={`flex flex-1 flex-shrink text-sm md:text-lg lg:text-2xl space-x-5 md:space-x-8 lg:space-x-10 items-center justify-center sticky top-0 z-50  p-2 lg:px-5 shadow-xl bg-[#222629]`}
    >
      <h1
        onClick={() => {
          setCurrentNavItem("home");
          navigate("/");
        }}
        className={`${
          currentNavItem === "home" ? "text-[#65ccb8]" : "text-[#6b6e70]"
        } cursor-pointer hover:scale-105`}
      >
        HOME
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("achievements");
          navigate("/achievements");
        }}
        className={`${
          currentNavItem === "achievements" ? "text-[#65ccb8]" : "text-[#6b6e70]"
        } cursor-pointer hover:scale-105`}
      >
        ACHIEVEMENTS
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("about");
          navigate("/about");
        }}
        className={`${
          currentNavItem === "about" ? "text-[#65ccb8]" : "text-[#6b6e70]"
        } cursor-pointer hover:scale-105`}
      >
        ABOUT
      </h1>
      <h1
        onClick={() => {
          setCurrentNavItem("contact");
          navigate("/contact");
        }}
        className={`${
          currentNavItem === "contact" ? "text-[#65ccb8]" : "text-[#6b6e70]"
        } cursor-pointer hover:scale-105`}
      >
        CONTACT
      </h1>
    </div>
  );
}

export default Header;
