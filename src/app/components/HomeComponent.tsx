import React from "react";
import HeroComponent from "./HeroComponent";
import AboutCeebsComponent from "./AboutCeebsComponent";
import FeatureComponent from "./FeatureComponent";
import WhyCeebsComponent from "./WhyCeebsComponent";
import FAQ from "./FAQ";
import FooterComponent from "./FooterComponent";

const HomeComponent = () => {
  return (
    <>
      <section className="hero-section h-dvh !mb-[100px] overflow-hidden">
        <HeroComponent />
      </section>
      <AboutCeebsComponent />
      <FeatureComponent />
      <WhyCeebsComponent />
      <FAQ />
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
