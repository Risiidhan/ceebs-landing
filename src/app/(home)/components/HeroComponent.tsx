"use client";

import React, { useRef } from "react";
// import FormComponent from "./forms/FormComponent";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/components/svg/Logo";
import TextReveal from "@/components/ui/TextReveal";
import TextParaAnimation from "@/components/ui/TextParaAnimation";
import ImageComponent from "@/components/ui/ImageComponent";

const HeroComponent = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div className="content-section px-[20px] flex-center flex-col gap-[20px] w-full h-full relative">
      <Logo />
      {/* <div className="animated-border min-h-[35px] flex-center">
        <span className="content-text lg:!text-[25px]">welcome to ceebs</span>
      </div> */}
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
      {/* <FormComponent /> */}
      <div className="block absolute bottom-0  w-screen z-10">
        <h1
          style={{ fontSize: "clamp(50px, 30vw, 500px)" }}
          className="font-bold gradient-outlined-text leading-none"
        >
          CEEBS
        </h1>
      </div>
      <TextReveal>
        <motion.div
          style={{ y: imageY }}
          className="w-[150px] md:w-[250px] aspect-[2/4] relative"
        >
          <ImageComponent src="/assets/ceebs-landing.png" />
        </motion.div>
      </TextReveal>
    </div>
  );
};

export default HeroComponent;
