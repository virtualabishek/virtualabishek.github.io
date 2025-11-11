import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { twMerge } from "tailwind-merge";
import "@fontsource/inter";
import "@fontsource/calistoga";
import Project from "./pages/Project.jsx";
import Perspective from "./pages/Perspective.jsx";
import { Toaster } from "react-hot-toast";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const dynamicClasses = twMerge(
    "bg-gray-900 text-white antialiased font-sans",
  );

  return (
    <div className={dynamicClasses}>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/perspective" element={<Perspective />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
