import React from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "../../components/svgComponents/StarIcon.jsx";

const CardHeader = ({ title, description, className }) => {
  return (
    <div className={twMerge("flex flex-col p-6", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
