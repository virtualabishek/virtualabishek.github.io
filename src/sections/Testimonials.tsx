import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Prakash Upadhaya",
    position: "Social Media Marketer",
    text: "I I highly recommend Abishek Neupane for his exceptional contributions to my project. His expertise in web development has been instrumental in delivering outstanding results. He consistently demonstrates a strong understanding of programming languages and frameworks!",
    avatar: memojiAvatar1,
  },
  {
    name: "Kelechi Coding",
    position: "Web Developer",
    text: " Abishek showcased a remarkable talent for problem-solving and an unwavering commitment to delivering top-notch results. His proficiency in web development is evident in his ability to navigate complex technical challenges with ease, always striving for innovative solutions that exceed expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Mukti Chaudhary",
    position: "Student",
    text: "Abishek help me to get knowledge about programming. He counselled everything related to IT field. He taught me from basic level . I am thankful to Abishek. Because of Abishek I came to know about advantages programming of which is helpful for my study further.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy client"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what clients say about my Work"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0)].map((_, ind) => (
              <Fragment key={ind}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full justify-center items-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="text-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
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
