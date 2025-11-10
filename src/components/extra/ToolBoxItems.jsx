// src/components/extra/ToolBoxItems.jsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

const ToolBoxItems = ({ items, className, itemWrapperClassName }) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemWrapperClassName,
        )}
      >
        {[...new Array(2).fill(0)].map((_, ind) => (
          <Fragment key={ind}>
            {items.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex items-center gap-4 px-6 py-3 outline outline-2 outline-white/10 rounded-lg bg-gray-800/80 backdrop-blur-sm hover:outline-emerald-400/40 hover:scale-105 transition-all duration-300"
              >
                <div className="text-emerald-400">
                  {/* DIRECTLY render the icon JSX */}
                  {tool.icon}
                </div>
                <span className="text-white/80 font-medium">{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
