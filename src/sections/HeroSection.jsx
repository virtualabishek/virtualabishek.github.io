import memojiImage from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../components/svgComponents/StarIcon";
import SparkleIcon from "../components/svgComponents/SparkleIcon";
import HeroOrbit from "../components/extra/HeroOrbit";
import ArrowDownIcon from "../components/svgComponents/ArrowDownIcon";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent,
       black_10%, black_70%, transparent)]"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="30s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="32s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit={true}
          orbitDuration="34s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="36s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="38s"
          spinDuration="6s"
        >
          <SparkleIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          shouldSpin={true}
          orbitDuration="40s"
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          orbitDuration="42s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit={true}
          orbitDuration="44s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit={true}
          orbitDuration="46s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          orbitDuration="48s"
          shouldSpin={true}
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <img
            src={memojiImage}
            alt="This is not me. "
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative size-2.5 bg-green-500 rounded-full">
              <span className="absolute inset-0 bg-green-500/90 animate-ping-large rounded-full"></span>
            </div>
            <p className="text-sm font-medium">Available</p>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center my-8 tracking-wide">
          I&apos;m Abishek Neupane
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I am a full-stack developer who strives to learn new skills every day.
          I love to create high-performing, functional, and logical web
          applications. Let&apos;s discuss your next project!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <HashLink
          to="/projects"
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10"
        >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDownIcon className="size-4" />
        </HashLink>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
        >
          <span>👋</span>
          <span>Let&apos;s Connect</span>
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
