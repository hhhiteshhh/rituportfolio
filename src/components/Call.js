import React from "react";

function Call() {
  return (
    <div className="flex mx-auto px-3 items-center justify-center flex-col py-5 bg-[#1a1a1d] text-white md:text-xl">
      <h1 className="my-5 text-lg md:text-4xl">/Lets Talk</h1>
      <p className="pb-5 text-center">
        Ready to share my experiences & lessons I've learned
      </p>
      <button className="mx-3 my-5 md:mx-10 w-52 md:w-96 py-2 border-2 border-[#6b6e70] px-4 rounded-md text-lg transition-all duration-150 ease-out text-white hover:bg-[#6b6e70] active:scale-90 focus:outline-none focus:ring-1 focus:ring-[#6b6e70]">
        Schedule a Call
      </button>
    </div>
  );
}

export default Call;
