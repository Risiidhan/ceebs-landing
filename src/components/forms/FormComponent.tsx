"use client";

import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import ModalComponent from "../ui/ModalComponent";

const FormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [isLoading, setisLoading] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<{
    title: string;
    message: string;
    type: "success" | "error" | "warning";
  }>({
    title: "",
    message: "",
    type: "success",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitForm = async () => {
    try {
      if (formData?.email === "") {
        setIsModalOpen(true);
        setModalContent({
          title: "Missing Information",
          message:
            "Please fill the required fields before submitting the form.",
          type: "warning",
        });
        return;
      }

      if (!isValidEmail(formData.email)) {
        setIsModalOpen(true);
        setModalContent({
          title: "Invalid Email",
          message: "Please enter a valid email address.",
          type: "warning",
        });
        return;
      }
      setisLoading(true);
      const response = await fetch("/api/register-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData?.email }),
      });

      const data = await response.json();

      if (data.success) {
        setIsModalOpen(true);
        setModalContent({
          title: "Request Submitted Successfully",
          message:
            "Your request to join the beta program has been received. We'll contact you soon.",
          type: "success",
        });
      } else {
        console.error("Error in response:", data.error);
        setIsModalOpen(true);
        setModalContent({
          title: "Request Failed",
          message: data.error,
          type: "error",
        });
      }
      setisLoading(false);
    } catch (error) {
      console.error("Network error:", error);
      setIsModalOpen(true);
      setModalContent({
        title: "Network Error",
        message:
          "Could not connect to the server. Please check your internet connection and try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row flex-center gap-3">
      <form action="" className="w-full grid grid-cols-1 gap-4">
        <InputComponent
          name={"email"}
          type={"email"}
          placeholder={"Enter Email"}
          value={formData.email}
          onChange={handleChange}
        />
      </form>
      <ButtonComponent isLoading={isLoading} onClick={submitForm} />

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        type={modalContent.type}
      >
        <p>{modalContent.message}</p>
      </ModalComponent>
    </div>
  );
};

export default FormComponent;
