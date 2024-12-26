import React from "react";
import PropTypes from "prop-types";

export const TechIcon = ({ component: Component }) => {
  if (!Component) {
    console.error(
      "TechIcon: 'component' prop is required and must be a valid React component."
    );
    return null;
  }

  return (
    <div className="relative">
      <Component className="size-10" fill="url(#tech-icon-gradient)" />
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// PropTypes validation
TechIcon.propTypes = {
  component: PropTypes.elementType.isRequired,
};
