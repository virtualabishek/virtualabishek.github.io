import React from "react";

const MySQLIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path
        fill="#00758F"
        d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 472c-119.103 0-216-96.897-216-216S136.897 40 256 40s216 96.897 216 216-96.897 216-216 216z"
      />
      <text
        x="50%"
        y="50%"
        fontSize="100"
        fill="#F29111"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="central"
      >
        MySQL
      </text>
    </svg>
  );
};

export default MySQLIcon;
