import React from "react";
import { Circle } from "better-react-spinkit";

function Loader() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Circle color="#3cbc28" size={60} />
        <h1>Loading...</h1>
      </div>
    </center>
  );
}

export default Loader;
