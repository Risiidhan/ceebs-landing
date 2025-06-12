import React from "react";

type ButtonComponentProps = {
  onClick: () => void;
  isLoading: boolean
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className="bg-white w-fit sm:w-auto min-w-[200px] cursor-pointer shadow-md shadow-zinc-300 rounded-[25px] py-1 text-black transition hover:shadow-lg"
    >
      <div className="relative flex-center content-text z-10 rounded-full bg-white py-0.5 px-4">
        <div className="content-text">
          {isLoading ? (<div className="spinner" />) : "Join Beta"}
          </div>
      </div>
    </button>
  );
};

export default ButtonComponent;
