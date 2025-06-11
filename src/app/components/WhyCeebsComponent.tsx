import React from "react";
import TextReveal from "./ui/TextReveal";
import TextParaAnimation from "./ui/TextParaAnimation";
import ImageComponent from "./ui/ImageComponent";

const featuresArr: string[] = [
  "Get early access to exclusive features.",
  "Help shape the platform by giving feedback.",
  "Be a part of an invite-only community.",
  "See the raw side of social — no filters, no likes.",
];

const WhyCeebsComponent = () => {
  return (
    <div className="content-section px-[20px] !mb-[100px]">
      <div className="flex flex-col lg:flex-row justify-center items-center glass-effect rounded-[25px] py-[40px] px-[20px] gap-[30px] md:gap-3">
        <div className="flex flex-col items-center text-center md:text-left lg:w-[40%] section-title">
          <TextReveal>Why Join the Beta?</TextReveal>
          <div className="w-[300px] h-auto aspect-[2/4] mt-[15px] relative">
            <ImageComponent src={"/assets/img-capture-2.png"} />
          </div>
        </div>
        <div className="context-text flex flex-col gap-3">
          {featuresArr.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex flex-col bg-black border border-[#404040bd] p-4 rounded-[15px]"
            >
              <TextParaAnimation>
                <div className="text-white text-[60px] font-[600]">
                  {index + 1}.
                </div>
                <div className="content-text">{feature}</div>
              </TextParaAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCeebsComponent;
