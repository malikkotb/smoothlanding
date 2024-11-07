"use client";
import { useEffect } from "react";
import Intro from "../components/Intro/Intro";
import Description from "../components/Description/Description";
import Projects from "../components/Projects/Projects";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={""}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
