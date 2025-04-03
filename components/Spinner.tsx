const Spinner = () => {
  return (
    <svg width="115" height="115" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeDasharray="252"
        strokeDashoffset="252"
        transform="rotate(-90, 50, 50)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="252"
          to="0"
          dur="0.75s"
          begin="0.6s"
          repeatCount="1"
          fill="freeze"
          keyTimes="0; 0.7; 1"
          values="252; 30; 0"
        />
      </circle>
    </svg>
  );
};

export default Spinner;
