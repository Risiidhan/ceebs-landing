import React from "react";
import TextReveal from "./ui/TextReveal";
import TextParaAnimation from "./ui/TextParaAnimation";
import CeebsFeatures from "./svg/CeebsFeatures";

const AboutCeebsComponent = () => {
  return (
    <div className="content-section px-[20px] flex flex-col items-center gap-3 !mb-[100px]">
      <TextReveal>
        <div className="text-center section-title">What is CEEBS?</div>
      </TextReveal>

      <TextParaAnimation>
        <div className="content-text text-center max-w-[700px]">
          CEEBS is a new-age, anonymous-first social experience that puts
          realness and raw moments first. Share thoughts, confessions, and
          connections without filters.
        </div>
      </TextParaAnimation>

      <CeebsFeatures />
    </div>
  );
};

export default AboutCeebsComponent;
