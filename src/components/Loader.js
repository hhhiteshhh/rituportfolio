import React from "react";
import { Circle } from "better-react-spinkit";

function Loader() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "#1a1a1d",
      }}
    >
      <div className="">
        <Circle color="#65ccb8" size={60} />
        <h1 className="text-white pt-5">Loading...</h1>
      </div>
    </center>
  );
}

export default Loader;
