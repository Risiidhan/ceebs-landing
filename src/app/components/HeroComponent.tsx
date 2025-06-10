import React from "react";
import FormComponent from "./forms/FormComponent";

const HeroComponent = () => {
  return (
    <div className="flex-center flex-col gap-[20px] w-full h-full">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="animated-border">
        <span className="content-text">welcome to ceebs</span>
      </div>
      <div className="gradient-text">
        No Names. No Pressure. <br className="hidden md:inline" />
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
