export function Logo() {
  return (
    <svg
      className="h-full w-full"
      fill="none"
      height="800"
      viewBox="0 0 800 800"
      width="800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-primary-foreground backdrop-blur-2xl"
        fill="currentColor"
        height="800"
        rx="196"
        width="800"
      />
      <path
        className="text-primary"
        d="M213 656V297.215C213 248.844 274.843 228.663 303.375 267.722L496.625 532.278C525.157 571.337 587 551.156 587 502.785V144"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="130"
      />
    </svg>
  );
}
