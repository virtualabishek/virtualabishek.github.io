const ArrowDownIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`size-6 ${className}`}
    {...props}
  >
    <path d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3" />
  </svg>
);

export default ArrowDownIcon;
