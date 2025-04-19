const NodeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 288"
      fill="currentColor"
      {...props}
    >
      <path fill="#83CD29" d="M128 0l128 74v140l-128 74L0 214V74z" />
      <path fill="#fff" d="M128 20l108 62v124l-108 62L20 206V82z" />
      <path fill="#83CD29" d="M128 40l88 50v108l-88 50-88-50V90z" />
    </svg>
  );
};

export default NodeIcon;
