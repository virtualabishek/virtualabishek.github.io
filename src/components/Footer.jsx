import React from "react";
import ArrowUpRightIcon from "../components/svgComponents/ArrowUpRightIcon";

const footerLinks = [
  { title: "Github", href: "https://github.com/virtualabishek" },
  { title: "Twitter", href: "https://x.com/virtualabishek" },
  { title: "Website", href: "https://www.abishekn.com.np" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/virtualabishek/" },
];

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative">
      <div className="absolute h-96 w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40 select-text">
            &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleLinkClick(link.href)}
                type="button"
                className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-gray-400 transition-colors bg-transparent border-none select-text"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="w-4 h-4 text-white" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
