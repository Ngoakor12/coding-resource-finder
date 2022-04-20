const removeBookmarkIcon = (
  <svg
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <g fill="currentColor">
      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
    </g>
  </svg>
);
const bookmarkIcon = (
  <svg
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <g fill="currentColor">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
    </g>
  </svg>
);

const clearSearchIcon = (
  <svg
    aria-hidden="true"
    role="img"
    width="18"
    height="18"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"
    ></path>
  </svg>
);

export { bookmarkIcon, removeBookmarkIcon, clearSearchIcon };
