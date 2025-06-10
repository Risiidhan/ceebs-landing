import React from "react";

const featuresArr: string[] = [
  "Get early access to exclusive features.",
  "Help shape the platform by giving feedback.",
  "Be a part of an invite-only community.",
  "See the raw side of social — no filters, no likes.",
];

const WhyCeebsComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-[30px] md:gap-3 mb-[100px]">
      <div className="text-left lg:w-[40%] section-title">Why Join the Beta?</div>
      <div className="context-text grid grid-cols-2 sm:grid-cols-2 gap-3">
        {featuresArr.map((feature: string, index: number) => (
          <div key={index} className="flex flex-col border p-4 rounded-[15px]">
            <div className="text-[50px] font-[600]">{index + 1}.</div>
            <div className="content-text">{feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCeebsComponent;
