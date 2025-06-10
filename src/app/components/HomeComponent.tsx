import React from "react";
import HeroComponent from "./HeroComponent";
import AboutCeebsComponent from "./AboutCeebsComponent";
import FeatureComponent from "./FeatureComponent";
import WhyCeebsComponent from "./WhyCeebsComponent";
import FAQ from "./FAQ";

const HomeComponent = () => {
  return (
    <div className="content-section px-[20px]">
      <section className="h-[80dvh] py-[20px]">
        <HeroComponent />
      </section>
      <AboutCeebsComponent />
      <FeatureComponent />
      <WhyCeebsComponent />
      <FAQ />
    </div>
  );
};

export default HomeComponent;
