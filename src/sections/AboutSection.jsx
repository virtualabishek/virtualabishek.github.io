import { useRef } from "react";
import SectionHeader from "../components/extra/SectionHeader";
import Card from "../components/extra/Card";
import CardHeader from "../components/extra/CardHeader";
import bookImage from "../assets/images/bookCover.png";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiGithub,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiSequelize,
  SiPhp,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { motion } from "framer-motion";
import CityImage from "../assets/images/City.png";
import smileEmoji from "../assets/images/memoji-smile.png";
import ToolBoxItems from "../components/extra/ToolBoxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
  },
  { title: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-orange-600" /> },
  { title: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-600" /> },
  { title: "React", icon: <SiReact className="w-10 h-10 text-cyan-500" /> },
  { title: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white" /> },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 text-green-500" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-600" />,
  },
  { title: "GitHub", icon: <SiGithub className="w-9 h-9 text-white" /> },
  { title: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-700" /> },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10 text-sky-700" />,
  },
  {
    title: "Prisma ORM",
    icon: <SiPrisma className="w-10 h-10 text-gray-200" />,
  },
  {
    title: "Sequelize ORM",
    icon: <SiSequelize className="w-10 h-10 text-blue-500" />,
  },
  { title: "PHP", icon: <SiPhp className="w-10 h-10 text-indigo-500" /> },
  { title: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-400" /> },
  { title: "Linux", icon: <SiLinux className="w-10 h-10 text-yellow-400" /> },
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
    <div className="py-20 lg:py-28" id="about">
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
                description="I am reading 'Mystic's Musings.' this days.  "
              />
              <div className="w-40 mx-auto mt-2">
                <img src={bookImage} alt="Jeevan Kada Ki Ful" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 overflow-hidden md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Technologies that power my digital creations."
                className="px-8 pt-8"
              />
              <div className="px-8 pb-8">
                <ToolBoxItems
                  items={toolboxItems}
                  itemWrapperClassName="animate-move-left [animation-duration:60s]"
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className="mt-6 -ml-8"
                  itemWrapperClassName="animate-move-right [animation-duration:75s]"
                />
              </div>
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
      </div>
    </div>
  );
};

export default AboutSection;
