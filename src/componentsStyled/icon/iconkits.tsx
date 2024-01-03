import React from "react";

interface KitsProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconKits: React.FC<KitsProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
  >
    <circle cx="24" cy="24" r="24" fill="#192C53" />
    <mask
      id="mask0_706_3177"
      maskUnits="userSpaceOnUse"
      x="12"
      y="12"
      width="24"
      height="24"
    >
      <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_706_3177)">
      <path
        d="M25 20V16C25 15.7167 25.0958 15.4792 25.2875 15.2875C25.4792 15.0958 25.7167 15 26 15H32C32.2833 15 32.5208 15.0958 32.7125 15.2875C32.9042 15.4792 33 15.7167 33 16V20C33 20.2833 32.9042 20.5208 32.7125 20.7125C32.5208 20.9042 32.2833 21 32 21H26C25.7167 21 25.4792 20.9042 25.2875 20.7125C25.0958 20.5208 25 20.2833 25 20ZM15 24V16C15 15.7167 15.0958 15.4792 15.2875 15.2875C15.4792 15.0958 15.7167 15 16 15H22C22.2833 15 22.5208 15.0958 22.7125 15.2875C22.9042 15.4792 23 15.7167 23 16V24C23 24.2833 22.9042 24.5208 22.7125 24.7125C22.5208 24.9042 22.2833 25 22 25H16C15.7167 25 15.4792 24.9042 15.2875 24.7125C15.0958 24.5208 15 24.2833 15 24ZM25 32V24C25 23.7167 25.0958 23.4792 25.2875 23.2875C25.4792 23.0958 25.7167 23 26 23H32C32.2833 23 32.5208 23.0958 32.7125 23.2875C32.9042 23.4792 33 23.7167 33 24V32C33 32.2833 32.9042 32.5208 32.7125 32.7125C32.5208 32.9042 32.2833 33 32 33H26C25.7167 33 25.4792 32.9042 25.2875 32.7125C25.0958 32.5208 25 32.2833 25 32ZM15 32V28C15 27.7167 15.0958 27.4792 15.2875 27.2875C15.4792 27.0958 15.7167 27 16 27H22C22.2833 27 22.5208 27.0958 22.7125 27.2875C22.9042 27.4792 23 27.7167 23 28V32C23 32.2833 22.9042 32.5208 22.7125 32.7125C22.5208 32.9042 22.2833 33 22 33H16C15.7167 33 15.4792 32.9042 15.2875 32.7125C15.0958 32.5208 15 32.2833 15 32ZM17 23H21V17H17V23ZM27 31H31V25H27V31ZM27 19H31V17H27V19ZM17 31H21V29H17V31Z"
        fill="white"
      />
    </g>
  </svg>
);
export default IconKits;
