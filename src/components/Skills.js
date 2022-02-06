import React from "react";

function Skills() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 mx-auto bg-[#1a1a1d] py-10 place-items-start space-y-5">
      <p className="text-white mx-auto italic text-md sm:text-3xl mt-4 ">
        Skills
      </p>
      <p className="text-white text-left text-sm sm:text-2xl  mb-2">
        Soft-Skills
      </p>
      <p className="text-white text-left text-sm sm:text-2xl mb-2">Tools</p>
      <p className="text-white text-left italic text-md sm:text-2xl"></p>
      <p className="text-white text-left text-sm sm:text-lg leading-7">
        Communication
        <br />
        Team Player
        <br />
        Problem Solver
        <br />
        Adaptablility
        <br />
        Creative
        <br />
        Attention to details
        <br />
        LeaderShip
      </p>
      <p className="text-white text-left text-sm sm:text-lg leading-7">
        Microsoft Office
        <br />
        GIS
      </p>
    </div>
  );
}

export default Skills;
