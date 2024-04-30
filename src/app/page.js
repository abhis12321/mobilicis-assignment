import React from "react";
import AnimationReact from "./animated/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-cyan-950/70 via-slate-900 to-gray-950 text-white bg-[ul('/Ab2.png')] bg-no-repeat bg-center py-2 border-b-2 border-gray-800"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="flex flex-col gap-4 max-w-[95%] md:w-[66%] md:pl-[9vw] lg:pl-0 lg:w-[45%] mx-auto items-center md:items-start">
        <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-2xl md:font-semibold">
          👋🏻 Hi there, I&apos;m
        </h3>
        <h1 className="text-justify drop-shadow-[0_0_8px_red] text-2xl md:text-4xl font-semibold">
          Going to show you
        </h1>
        <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-2xl md:font-semibold">
          Job Opportunities in Japan
        </h3>
      </div>
      <AnimationReact />
    </div>
  );
}
