import React from "react";
import FormComponent from "./forms/FormComponent";

const HeroComponent = () => {
  return (
    <div className="flex-center flex-col gap-[20px] w-full h-full">
      <div className="uppercase content-text border rounded-[25px] py-[3px] px-[12px]">
        welcome to ceebs
      </div>
      <div className="text-[40px] md:text-[60px] text-center font-[700] leading-[50px] md:leading-[70px]">
        No Names. No Pressure. <br className="hidden md:inline"/>
        Just You - First in Beta
      </div>
      <div className="text-center content-text">
        A raw, anonymous social experience like no other. Built for the brave.
      </div>
      <FormComponent />
    </div>
  );
};

export default HeroComponent;
