import CeebsFeatures from "@/components/svg/CeebsFeatures";
import TextParaAnimation from "@/components/ui/TextParaAnimation";
import TextReveal from "@/components/ui/TextReveal";
import React from "react";

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
