import React from "react";

interface ExternoProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconExterno: React.FC<ExternoProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
  >
    <circle cx="24" cy="24" r="24" fill="#192C53"/>
  <mask id="mask0_706_3167" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
  <rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_706_3167)">
  <path d="M17 20V31H31V20H28V26.375C28 26.7583 27.8417 27.0458 27.525 27.2375C27.2083 27.4292 26.8833 27.4417 26.55 27.275L24 26L21.45 27.275C21.1167 27.4417 20.7917 27.4292 20.475 27.2375C20.1583 27.0458 20 26.7583 20 26.375V20H17ZM17 33C16.45 33 15.9792 32.8042 15.5875 32.4125C15.1958 32.0208 15 31.55 15 31V18.525C15 18.2917 15.0375 18.0667 15.1125 17.85C15.1875 17.6333 15.3 17.4333 15.45 17.25L16.7 15.725C16.8833 15.4917 17.1125 15.3125 17.3875 15.1875C17.6625 15.0625 17.95 15 18.25 15H29.75C30.05 15 30.3375 15.0625 30.6125 15.1875C30.8875 15.3125 31.1167 15.4917 31.3 15.725L32.55 17.25C32.7 17.4333 32.8125 17.6333 32.8875 17.85C32.9625 18.0667 33 18.2917 33 18.525V31C33 31.55 32.8042 32.0208 32.4125 32.4125C32.0208 32.8042 31.55 33 31 33H17ZM17.4 18H30.6L29.75 17H18.25L17.4 18ZM22 20V24.75L24 23.75L26 24.75V20H22Z" fill="white"/>
  </g>
  </svg>
);
export default IconExterno;
