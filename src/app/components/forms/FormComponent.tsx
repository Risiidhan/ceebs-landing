"use client";

import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async () => {
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: formData?.name,
        age: formData?.age,
        email: formData?.email,
      }),
    });
  };

  return (
    <div className="w-full flex-center flex-col md:flex-row gap-3">
      <form action="" className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
        <InputComponent
          name={"name"}
          type={"text"}
          placeholder={"Enter Name"}
          value={formData.name}
          onChange={handleChange}
        />
        <InputComponent
          name={"email"}
          type={"email"}
          placeholder={"Enter Email"}
          value={formData.email}
          onChange={handleChange}
        />
        <InputComponent
          name={"age"}
          type={"number"}
          placeholder={"Enter Age"}
          className="remove-number-spin"
          value={formData.age}
          onChange={handleChange}
        />
      </form>
      <ButtonComponent onClick={submitForm} />
    </div>
  );
};

export default FormComponent;
