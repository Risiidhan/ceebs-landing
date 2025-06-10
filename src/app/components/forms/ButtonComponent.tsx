import React from "react";

const ButtonComponent = () => {
  return (
    <button className="bg-black min-w-[200px] cursor-pointer shadow-2xl shadow-zinc-900 rounded-[25px] py-1 text-white">
      <div className="relative flex-center content-text z-10 rounded-full bg-black py-0.5 px-4  ">
        <div className="content-text">Join Beta</div>
      </div>
    </button>
  );
};

export default ButtonComponent;
