import nepDoc from "../assets/images/nepDoc.png";
import rojgarSabailai from "../assets/images/rojgarSabailai.png";
import wishPix from "../assets/images/wishpix.png";
import nationPortal from "../assets/images/4np.png";
import SectionHeader from "../components/extra/SectionHeader";
import Card from "../components/extra/Card";
import CheckCircleIcon from "../components/svgComponents/CheckCircleIcon";
import ArrowUpRightIcon from "../components/svgComponents/ArrowUpRightIcon";
import { toast } from "react-hot-toast";

const protfolioProjects = [
  {
    name: "WishPix",
    year: 2025,
    title: "Responsive WebApp for Graphic Desigining Company",
    results: [
      { title: "A Smooth & Functional UI/UX" },
      { title: "Created the multiple pages to show the company" },
      { title: "Project done on next.js for both frontend and backend" },
    ],
    link: "https://wishpix.agency",
    image: wishPix,
  },
  {
    name: "Brother Protfolio",
    year: 2022,
    title: "4Nation Chitwan Consuntancy Portal App",
    results: [
      { title: "Worked with both frontend and backend" },
      { title: "Created the api using node.js and prisma ORM" },
      { title: "Admin can verify the form and record the student Data" },
    ],
    link: "https://4nationschitwan.com",

    image: nationPortal,
  },
  {
    name: "nepDoc",
    year: 2024,
    title: "A Doctor Appointment Web App",
    results: [
      { title: "A Smooth & Functional UI/UX" },
      { title: "All the details about Doctors" },
      { title: "Can Logged In & Book Appointments" },
    ],
    link: "https://nep-doc.vercel.app",
    repo: "https://github.com/virtualabishek/nepDoc",
    image: nepDoc,
  },
  {
    name: "Rojgar Sabailai",
    year: 2023,
    title: "RS - Online Job Portal",
    results: [
      { title: "Created a responsive UI/UX" },
      { title: "User can apply and post the job" },
      { title: "Filter of a relative job" },
    ],
    link: "https://rojgarsabailai.netlify.app",
    repo: "https://github.com/virtualabishek/Hackathon-Project/tree/master/api-v1-master%20-%20Finall%20with%20backend/api-v1-master",
    image: rojgarSabailai,
  },
];

const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          info={"Real World Projects"}
          title={"Featured Projects"}
          description={
            "Here are some of the projects that I have worked on to build my skills."
          }
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {/* Aba Project lai map garna paryo. */}
          {protfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.name}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="md:flex gap-2">
                    <div>
                      <a
                        href={project.link}
                        className="bg-white text-gray-950 h-12 w-full md:w-fit px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </a>
                    </div>
                    <div>
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-950 h-12 w-full md:w-fit px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                        >
                          <span>Visit Repo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() =>
                            toast(
                              "This is a real-world project and its code is proprietary."
                            )
                          }
                          className="bg-white text-gray-950 h-12 w-full md:w-fit px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                        >
                          <span>Visit Repo</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
