import Broadcast from "@/components/svg/Broadcast";
import Connect from "@/components/svg/Connect";
import Moments from "@/components/svg/Moments";
import Wall from "@/components/svg/Wall";
import Whisper from "@/components/svg/Whisper";
import TextParaAnimation from "@/components/ui/TextParaAnimation";
import TextReveal from "@/components/ui/TextReveal";
import React, { ReactNode } from "react";

type featureType = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeatureDiv: React.FC<featureType> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-3 glass-effect h-full rounded-[15px] p-[20px]">
      <TextParaAnimation>
        <div className="mb-3">{icon}</div>
        <div className="content-text py-[10px] !font-bold">{title}</div>
        <div className="content-text">{description}</div>
      </TextParaAnimation>
    </div>
  );
};

const featuresArr: featureType[] = [
  {
    icon: <Moments />,
    title: "Moments",
    description: "Post images, videos, and audio anonymously.",
  },
  {
    icon: <Whisper />,
    title: "Whisper",
    description: "Send silent messages without exposing your identity.",
  },
  {
    icon: <Broadcast />,
    title: "Broadcast",
    description: "Reach nearby users with timed thoughts and feels.",
  },
  {
    icon: <Connect />,
    title: "Connect",
    description: "Discover Connections around the world",
  },
  {
    icon: <Wall />,
    title: "World Wall",
    description: "Your voice is valued. Share and express yourself",
  },
];

const FeatureComponent = () => {
  return (
    <div className="content-section px-[20px] flex flex-col items-center gap-[30px] !mb-[100px]">
      <TextReveal>
        <div className="text-center section-title">Core Features</div>
      </TextReveal>
      <div className="context-text grid grid-cols-2 md:grid-cols-3 gap-4">
        {featuresArr.map((feature: featureType, index: number) => (
          <div
            key={index}
            className={`${index == featuresArr.length - 1 ? "col-span-2" : ""}`}
          >
            <FeatureDiv key={index} {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureComponent;
