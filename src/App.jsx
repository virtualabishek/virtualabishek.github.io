import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { twMerge } from "tailwind-merge";
import "@fontsource/inter";
import "@fontsource/calistoga";
import Project from "./pages/Project.jsx";

import { Route, Routes } from "react-router-dom";

import React from "react";

const App = () => {
  const dynamicClasses = twMerge(
    "bg-gray-900 text-white antialiased font-sans"
  );

  return (
    <div className={dynamicClasses}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
