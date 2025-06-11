import React from "react";
import FormComponent from "./forms/FormComponent";
import TextReveal from "./ui/TextReveal";
import TextParaAnimation from "./ui/TextParaAnimation";
import ImageComponent from "./ui/ImageComponent";
import Logo from "./svg/Logo";

const HeroComponent = () => {
  return (
    <div className="content-section px-[20px] flex-center flex-col gap-[20px] w-full h-full relative">
      <Logo />
      <div className="animated-border min-h-[35px] flex-center">
        <span className="content-text ">welcome to ceebs</span>
      </div>
      <TextReveal>
        <div className="gradient-text text-[40px] lg:text-[60px] font-[700] leading-[50px] lg:leading-[70px]">
          No Names. No Pressure. <br className="hidden md:inline" />
          Just You - First in Beta
        </div>
      </TextReveal>
      <TextParaAnimation>
        <div className="text-center content-text">
          A raw, anonymous social experience like no other. Built for the brave.
        </div>
      </TextParaAnimation>
      <FormComponent />
      <div className="hidden sm:block absolute bottom-0 translate-y-[15%] w-screen">
        <h1
          style={{ fontSize: "clamp(50px, 30vw, 500px)" }}
          className="font-bold gradient-outlined-text leading-none"
        >
          CEEBS
        </h1>
      </div>
      <TextReveal>
        <div className="hidden sm:block w-[400px] -mb-[100%] h-auto aspect-[2/4] relative">
          <ImageComponent src={"/assets/ceebs-potrait.png"} />
        </div>
      </TextReveal>
    </div>
  );
};

export default HeroComponent;
