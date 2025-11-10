import React, { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { twMerge } from "tailwind-merge";
import "@fontsource/inter";
import "@fontsource/calistoga";
import Project from "./pages/Project.jsx";
import Perspective from "./pages/Perspective.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [showBlogBanner, setShowBlogBanner] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("blogBannerDismissed");
    if (dismissed) {
      setShowBlogBanner(false);
    }

    const handleStorageChange = () => {
      const dismissed = localStorage.getItem("blogBannerDismissed");
      setShowBlogBanner(!dismissed);
    };

    window.addEventListener("storage", handleStorageChange);

    const handleBannerDismiss = () => {
      setShowBlogBanner(false);
    };

    window.addEventListener("blogBannerDismissed", handleBannerDismiss);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("blogBannerDismissed", handleBannerDismiss);
    };
  }, []);

  const dynamicClasses = twMerge(
    "bg-gray-900 text-white antialiased font-sans",
  );
  const contentPadding = showBlogBanner ? "pt-32" : "pt-20";

  return (
    <div className={dynamicClasses}>
      <Navbar />
      <div className={contentPadding}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/perspective" element={<Perspective />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
