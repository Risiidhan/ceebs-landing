"use client";

import React from "react";
import Image from "next/image";

const ImageComponent = ({ src }: { src: string }) => {
  return <Image src={src} fill alt="" />;
};

export default ImageComponent;
