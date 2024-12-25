import React from "react";
import Card from "../components/extra/Card";
import { Fragment } from "react";
import SectionHeader from "../components/extra/SectionHeader";
import prakashAvatar from "../assets/images/memoji-avatar-1.png";
import kelechiAvatar from "../assets/images/memoji-avatar-2.png";
import muktiAvatar from "../assets/images/memoji-avatar-3.png";

const testimonials = [
  {
    name: "Prakash Upadhaya",
    position: "Social Media Marketer",
    text: "I highly recommend Abishek Neupane for his exceptional contributions to my project. His expertise in web development has been instrumental in delivering outstanding results. He consistently demonstrates a strong understanding of programming languages and frameworks!",
    avatar: prakashAvatar,
  },
  {
    name: "Kelechi Coding",
    position: "Web Developer",
    text: " Abishek showcased a remarkable talent for problem-solving and an unwavering commitment to delivering top-notch results. His proficiency in web development is evident in his ability to navigate complex technical challenges with ease, always striving for innovative solutions that exceed expectations.",
    avatar: kelechiAvatar,
  },
  {
    name: "Mukti Chaudhary",
    position: "Student",
    text: "Abishek help me to get knowledge about programming. He counselled everything related to IT field. He taught me from basic level . I am thankful to Abishek. Because of Abishek I came to know about advantages programming of which is helpful for my study further.",
    avatar: muktiAvatar,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          info="Happy Clients"
          title="What my friends said!"
          description="To be honest, these are my friends. We started learning at the same time, but we have been working on different projects. HAHA, I asked them first, and they provided the testimonials. You can check these testimonials on my LinkedIn profile. :)"
        />
        {/* Yo chai bailai Hero lai banako header vayo, jata ni use garda vayo */}
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {/* Map Garyo mathi ko testimonials lai */}
            {[...new Array(2).fill(0)].map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonail) => (
                  <Card
                    key={testimonail.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full justify-center items-center flex-shrink-0">
                        <img src={testimonail.avatar} alt={testimonail.name} />
                      </div>

                      <div className="text-semibold">
                        {testimonail.name}

                        <div className="text-sm text-white/40">
                          {testimonail.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonail.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
