import type { SVGProps } from "react";

export const RainIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 102 101"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="m39.833 58.75-8.75 20.417M48.583 64.583 39.833 85M63.167 58.75l-8.75 20.417M59.404 67.5h.846c14.496 0 26.25-11.754 26.25-26.25S74.746 15 60.25 15c-12.483 0-22.925 8.72-25.58 20.417h-2.128c-8.809 0-16.042 7.204-16.042 16.041 0 6.067 3.413 11.375 8.4 14.088a15.75 15.75 0 0 0 7.642 1.954h3.529"
    />
  </svg>
);
