export const Star = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="78"
      viewBox="0 0 116 78"
      {...rest}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodColor="#E95848" floodOpacity="1" result="color" />
          <feComposite
            in="blur"
            in2="color"
            operator="in"
            result="coloredBlur"
          />
          <feComposite
            in="SourceGraphic"
            in2="coloredBlur"
            operator="over"
            result="final"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feFlood floodColor="#E95848" floodOpacity="0.8" result="color" />
          <feComposite
            in="coloredBlur"
            in2="color"
            operator="in"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="116" height="78" fill="#111" rx="39" />
      <path
        filter="url(#softGlow)"
        fill="#fff"
        d="M60.2132 35.2026L58 24L55.7923 35.1747L50.6415 32.1549L53.8095 36.9494L42 39L53.9015 41.0666L50.61 46.0009L55.8217 42.9743L58 54L60.177 42.9805L65.3792 46.0304L62.0992 41.0664L74 39L62.2277 36.9559L65.4106 32.1843L60.2132 35.2026Z"
      >
        <animate
          attributeName="filter"
          values="url(#softGlow);url(#glow);url(#softGlow)"
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0; 0.5; 1"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          calcMode="spline"
        />
      </path>
    </svg>
  );
};
