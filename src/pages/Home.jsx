import React from "react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
