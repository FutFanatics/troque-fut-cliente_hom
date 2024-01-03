import React from 'react';

interface DisponivelProps{
    className?:string;
    width?:number;
    fill?:string;
    height?:number;
}
const IconDisponivel: React.FC<DisponivelProps> = ({ className , width, height }) =>(
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23" stroke="#00DF5E" stroke-width="2"/>
  <mask id="mask0_658_7425" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
  <rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_658_7425)">
  <path d="M17 33C16.45 33 15.9792 32.8042 15.5875 32.4125C15.1958 32.0208 15 31.55 15 31V18.525C15 18.2917 15.0375 18.0667 15.1125 17.85C15.1875 17.6333 15.3 17.4333 15.45 17.25L16.7 15.725C16.8833 15.4917 17.1125 15.3125 17.3875 15.1875C17.6625 15.0625 17.95 15 18.25 15H29.75C30.05 15 30.3375 15.0625 30.6125 15.1875C30.8875 15.3125 31.1167 15.4917 31.3 15.725L32.55 17.25C32.7 17.4333 32.8125 17.6333 32.8875 17.85C32.9625 18.0667 33 18.2917 33 18.525V31C33 31.55 32.8042 32.0208 32.4125 32.4125C32.0208 32.8042 31.55 33 31 33H17ZM17.4 18H30.6L29.75 17H18.25L17.4 18ZM28 20H20V28L24 26L28 28V20Z" fill="#00DF5E"/>
  </g>
  </svg>

);
export default IconDisponivel;