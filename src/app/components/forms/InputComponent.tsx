import React from "react";

const InputComponent = () => {
  return (
    <div className="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-black">
      <input
        type="text"
        name="from_name"
        id="from"
        autoComplete="from"
        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-2 content-text"
        placeholder="janesmith"
      />
    </div>
  );
};

export default InputComponent;
