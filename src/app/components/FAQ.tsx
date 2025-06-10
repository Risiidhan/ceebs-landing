"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: "When is the beta launching?",
    answer: "Soon. You'll be notified via email.",
  },
  {
    question: "Is CEEBS anonymous?",
    answer:
      "Yes, always. Identity is never revealed unless you choose to share it.",
  },
  {
    question: "Which platforms will it support?",
    answer: "iOS and Android initially.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-[100px]">
      <div className="text-center section-title mb-[20px]">
        Frequently Asked Questions
      </div>
      <div className="w-full md:max-w-[80%] mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="text-lg font-medium text-gray-900 flex justify-between items-center">
              {item.question}
              <span className="ml-2 text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            <div
              className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
