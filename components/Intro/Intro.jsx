"use client";
import React, { useRef } from "react";
import styles from "./style.module.css";
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
        style={{ filter: brightness(0.6) }}
        className="w-full h-[140vh] absolute"
      >
        <Image
          src={"/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
    </div>
  );
}
