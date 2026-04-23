export const MenuIcon = ({
  className = "size-6",
  strokeWidth = 1,
}: {
  className?: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 10h16.5m-16.5 3.5h16.5"
      />
    </svg>
  );
};

export const ArrowDownLeftIcon = ({
  className = "size-6",
  strokeWidth = 1,
}: {
  className?: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
      />
    </svg>
  );
};

export const SpecialStarIcon = ({
  className = "size-6",
}: {
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 9.5861V7.29003L8.17647 5.62538L8.47059 9.87311L0 9.5861ZM4 18.3112L5.41176 10.5619L9.64706 11.5378L6.17647 19L4 18.3112ZM7.41177 0.918431L9.70588 0L14.1176 6.77341L10.1176 8.55287L7.41177 0.918431ZM9.29412 14.7523L11.7059 11.1934L18.1765 16.4169L16.9412 18.2538L9.29412 14.7523ZM11.8235 9.29909L18.8824 4.93656L20 6.94562L14.6471 12.5136L11.8235 9.29909Z"
        fill="currentColor"
      />
    </svg>
  );
};
