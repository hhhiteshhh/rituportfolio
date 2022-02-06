import React from "react";

function Skills() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 mx-auto bg-[#1a1a1d] py-10 place-items-start space-y-5">
      <p className="text-white mx-auto italic text-md sm:text-3xl mt-4 font-bold">
        Skills
      </p>
      <p className="text-white text-left text-sm sm:text-2xl mb-2 font-bold col-span-2 sm:col-span-1">
        Soft-Skills
        <p className="text-white text-left text-sm sm:text-lg leading-7">
          <li>Communication</li>
          <li>Team Player</li>
          <li>Problem Solver</li>
          <li>Adaptablility</li>
          <li>Creative</li>
          <li>Attention to details</li>
          <li>LeaderShip</li>
        </p>
      </p>
      <p className="inline-flex sm:hidden"></p>
      <p className="text-white text-left text-sm sm:text-2xl mb-2 font-bold col-span-2 sm:col-span-1">
        Tools
        <p className="text-white text-left text-sm sm:text-lg leading-7">
          <li>Microsoft Office</li>
          <li>GIS</li>
        </p>
      </p>
    </div>
  );
}

export default Skills;
