import { main } from "framer-motion/client";
import React from "react";

import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import TapeSection from "../sections/TapeSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Home;
