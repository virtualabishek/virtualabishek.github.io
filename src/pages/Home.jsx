import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import PersonalReflection from "../components/PersonalReflection";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Testimanials from "../components/Testimanials";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <About />
        <PersonalReflection />
        <Services />
        <Skills />
        <Experience />
        <Testimanials />
        <Certificates />
        <Contact />
      </div>
    </>
  );
};

export default Home;
