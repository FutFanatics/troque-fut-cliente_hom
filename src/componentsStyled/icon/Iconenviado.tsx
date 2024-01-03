import React from "react";

interface EnviadoProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconEnviado: React.FC<EnviadoProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill="none"
  >
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0C49.6736 0 64 14.3264 64 32C64 49.6736 49.6736 64 32 64C14.3264 64 0 49.6736 0 32C0 14.3264 14.3264 0 32 0ZM60.8 32C60.8 16.0944 47.9056 3.2 32 3.2C16.0944 3.2 3.2 16.0944 3.2 32C3.2 47.9056 16.0944 60.8 32 60.8C47.9056 60.8 60.8 47.9056 60.8 32Z" fill="#192C53"/>
<mask id="mask0_658_2799" maskUnits="userSpaceOnUse" x="12" y="12" width="40" height="40">
<rect x="12" y="12" width="40" height="40" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_658_2799)">
<path d="M38.5834 48.666L31.5 41.5827L33.8334 39.2493L38.5834 43.9993L48 34.5827L50.3334 36.916L38.5834 48.666ZM32 30.3327L45.3334 21.9993H18.6667L32 30.3327ZM32 33.666L18.6667 25.3327V41.9993H27.25L30.5834 45.3327H18.6667C17.75 45.3327 16.9653 45.0063 16.3125 44.3535C15.6598 43.7007 15.3334 42.916 15.3334 41.9993V21.9993C15.3334 21.0827 15.6598 20.298 16.3125 19.6452C16.9653 18.9924 17.75 18.666 18.6667 18.666H45.3334C46.25 18.666 47.0348 18.9924 47.6875 19.6452C48.3403 20.298 48.6667 21.0827 48.6667 21.9993V29.2493L45.3334 32.5827V25.3327L32 33.666Z" fill="#192C53"/>
</g>
</svg>

);
export default IconEnviado;
