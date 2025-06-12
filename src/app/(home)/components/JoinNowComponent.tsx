import FormComponent from "@/components/forms/FormComponent";
import React from "react";


const JoinNowComponent = () => {
  return (
    <div className="content-section px-[20px] !mb-[100px]">
      <div className="glass-effect rounded-[16px]">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center md:gap-[20px] p-[20px] sm:p-[40px]">
          <div className="w-full sm:w-[80%] flex-center leading-[3.5rem] mb-[10px] section-title">Be the First to Try It!</div>

          <div className="w-full">
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNowComponent;
