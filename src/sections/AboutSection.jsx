import React, { useRef } from "react";
import SectionHeader from "../components/extra/SectionHeader";
import Card from "../components/extra/Card";
import CardHeader from "../components/extra/CardHeader";
import bookImage from "../assets/images/bookCover.png";
import JavascriptIcon from "../components/svgComponents/JavaScriptIcon";
import HTMLIcon from "../components/svgComponents/Html5";
import CssIcon from "../components/svgComponents/Css3";
import ReactIcon from "../components/svgComponents/ReactIcon";
import ChromeIcon from "../components/svgComponents/Chrome";
import GithubIcon from "../components/svgComponents/Github";
import ToolBoxItems from "../components/extra/ToolBoxItems";
import { motion } from "framer-motion";
import CityImage from "../assets/images/City.png";
import smileEmoji from "../assets/images/memoji-smile.png";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Reading", emoji: "📚", top: "5%", left: "5%" },
  { title: "Exploring", emoji: "💥", top: "5%", left: "50%" },
  { title: "Cooking", emoji: "🧑‍🍳", top: "35%", left: "10%" },
  { title: "Music", emoji: "🎧", top: "40%", left: "35%" },
  { title: "Coding", emoji: "🧑‍💻", top: "45%", left: "70%" },
  { title: "Cinema", emoji: "🎬", top: "70%", left: "45%" },
  { title: "Teaching", emoji: "👨‍🏫", top: "65%", left: "5%" },
];

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          info="About Me"
          title="A Look into My World!"
          description="Discover more about who I am, what I do, and what drives my passion."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
              <CardHeader
                title="My Reads"
                description="Explore Book I am reading nowadays."
              />
              <div className="w-40 mx-auto mt-2">
                <img src={bookImage} alt="Jeevan Kada Ki Ful" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the technologies and tools used to craft the digital experiences."
                }
              />
              <ToolBoxItems
                items={toolboxItems}
                itemWrapperClassName="animate-move-left [animate-duration-30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName="animate-move-left [animate-duration-30s]"
              />
            </Card>
          </div>
          <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2 mb-8 md:mb-0">
              <CardHeader
                title={"Beyoing the Code"}
                description={
                  "Explore my interests and hobbies beyond the code."
                }
                className="p-6"
              />
              <div className="relative flex-1 ref={constraintRef}">
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative mod:col-span-2 lg:col-span-1">
              <img
                src={CityImage}
                alt="Sirjana Chock, Chitwan"
                className="size-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:ring-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
                <img src={smileEmoji} alt="HAHA" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutSection;
