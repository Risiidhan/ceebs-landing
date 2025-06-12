"use client";

import TextReveal from "@/components/ui/TextReveal";
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
    <div className="content-section px-[20px] !mb-[100px]">
      <TextReveal>
        <div className="text-center section-title mb-[20px]">
          Frequently Asked Questions
        </div>
      </TextReveal>
      <div className="w-full flex flex-col gap-1 md:max-w-[80%] mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="glass-effect p-4 cursor-pointer rounded-[15px]"
            onClick={() => toggle(index)}
          >
            <h3 className="content-text text-white !font-[400] flex justify-between items-center">
              {item.question}
              <span className="ml-2 text-white">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            <div
              className={`mt-2 text-gray-300 transition-all duration-300 ease-in-out ${openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <p className="content-text text-[#ffffff8f]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
