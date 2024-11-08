"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Intro() {
  gsap.registerPlugin(useGSAP);

  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const master = gsap.timeline();
    // master.add(setInitialStates).add(preloaderAnimation());
  }, []);

  return (
    <div ref={homeHeader} className="relative w-full flex justify-center">
      <div
        ref={background}
        style={{ filter: "brightness(0.6)" }}
        className="w-full h-[140vh] absolute"
      >
        <Image
          src={"/background.jpg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={"flex justify-center relative mt-[35vh]"}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          style={{ filter: "brightness(0.7)" }}
          className={"w-[350px] h-[475px] absolute"}
        >
          <Image
            src={"/intro.png"}
            alt="intro image"
            className="object-cover object-top"
            fill={true}
            priority={true}
          />
        </div>
        <h1
          style={{ zIndex: 3 }}
          className="text-white text-[7vw] text-center whitespace-nowrap"
          data-scroll
          data-scroll-speed="0.7"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  );
}
