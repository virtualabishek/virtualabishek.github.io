import React from "react";
import ArrowUpRightIcon from "./svgComponents/ArrowUpRightIcon";
// dherai improve garna chai footer chai.
const footerLinks = [
  { title: "Github", href: "https://github.com/virtualabishek" },
  { title: "Twitter", href: "https://x.com/virtualabishek" },
  {
    title: "Check Upcomming Update On This Site",
    href: "https://www.notion.so/Upcoming-Updates-on-Portfolio-Website-1699523fa72e804fb58fe07c67dc03b5?",
  },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/virtualabishek/" },
  { title: "Blog", href: "https://blogs/abishekn.com.np/" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip z-10">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 cursor-pointer text-white"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
