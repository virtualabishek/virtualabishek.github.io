import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}>
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}>
        {[...new Array(2).fill(0)].map((_, ind) => (
          <Fragment key={ind}>
            {items.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex  items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg">
                <span>
                  <TechIcon component={tool.iconType} />
                </span>
                <span>{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
