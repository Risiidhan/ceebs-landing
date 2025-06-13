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
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      ref={containerRef}
      className="content-section px-[20px] flex-center flex-col gap-[20px] w-full h-full relative"
    >
      <div className="sticky flex-center flex-col top-1/2">
        <Logo />
        <TextReveal>
          <div className="gradient-text text-[40px] lg:text-[60px] font-[700] leading-[50px] lg:leading-[70px]">
            No Names. No Pressure. <br className="hidden md:inline" />
            Just You - First in Beta
          </div>
        </TextReveal>
        <TextParaAnimation>
          <div className="text-center content-text">
            A raw, anonymous social experience like no other. Built for the
            brave.
          </div>
        </TextParaAnimation>
        <TextReveal>
          <motion.div
            style={{ y: imageY }}
            className="w-[150px] md:w-[250px] aspect-[2/4] relative"
          >
            <ImageComponent src="/assets/ceebs-landing.png" />
          </motion.div>
        </TextReveal>
      </div>

      <div className="absolute bottom-0 w-screen z-10 flex justify-center items-center">
          <h1
            style={{ fontSize: "clamp(50px, 25vw, 500px)" }}
            className="font-bold blur-soft-edges backdrop-blur-xl gradient-outlined-text leading-none text-center"
          >
            CEEBS
          </h1>
      </div>
    </div>
  );
};

export default HeroComponent;
