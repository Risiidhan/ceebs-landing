import React from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const FormComponent = () => {
  return (
    <div className="flex-center flex-col md:flex-row gap-3">
      <form action="" className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
        <InputComponent />
        <InputComponent />
        <InputComponent />
      </form>
      <ButtonComponent />
    </div>
  );
};

export default FormComponent;
