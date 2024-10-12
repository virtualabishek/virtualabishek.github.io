import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const qualities = [
  "User-Friendly",
  "Fast Performance",
  "Simple to Use",
  "Easy to Maintain",
  "Secure Data Handling",
  "Consistent Design",
  "Clear Navigation",
  "Basic API Functionality",
  "Reliable Connections",
  "Efficient Data Storage",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24  overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {qualities.map((quality) => (
                  <div key={quality} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {quality}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
