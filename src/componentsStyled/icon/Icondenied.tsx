import React from "react";

interface DeniedProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconDenied: React.FC<DeniedProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 18"
    fill="none"
  >

<path d="M2 5H10.45H10H10.35H2ZM2.4 3H15.6L14.75 2H3.25L2.4 3ZM7 9.75L9 8.75L11 9.75V5H7V9.75ZM11.55 18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V3.525C0 3.29167 0.0375 3.06667 0.1125 2.85C0.1875 2.63333 0.3 2.43333 0.45 2.25L1.7 0.725C1.88333 0.491667 2.1125 0.3125 2.3875 0.1875C2.6625 0.0625 2.95 0 3.25 0H14.75C15.05 0 15.3375 0.0625 15.6125 0.1875C15.8875 0.3125 16.1167 0.491667 16.3 0.725L17.55 2.25C17.7 2.43333 17.8125 2.63333 17.8875 2.85C17.9625 3.06667 18 3.29167 18 3.525V8.425C17.6833 8.30833 17.3583 8.21667 17.025 8.15C16.6917 8.08333 16.35 8.05 16 8.05V5H13V8.825C12.4167 9.15833 11.9083 9.57083 11.475 10.0625C11.0417 10.5542 10.7 11.1083 10.45 11.725L9 11L5 13V5H2V16H10.35C10.4833 16.3833 10.65 16.7417 10.85 17.075C11.05 17.4083 11.2833 17.7167 11.55 18Z" fill="white"/>
<path d="M13.901 17.5L12.501 16.1L14.601 14L12.501 11.9L13.901 10.5L16.001 12.6L18.101 10.5L19.501 11.9L17.426 14L19.501 16.1L18.101 17.5L16.001 15.425L13.901 17.5Z" fill="white"/>
</svg>


);
export default IconDenied;