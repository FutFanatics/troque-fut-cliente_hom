import React from 'react';

interface CartProps{
    className?:string;
    width?:number;
    fill?:string;
    height?:number;
}
const IconCart: React.FC<CartProps> = ({ className , width, height }) =>(
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23" stroke="#00DF5E" stroke-width="2"/>
  <mask id="mask0_658_7301" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
    <rect x="12" y="12" width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_658_7301)">
    <path d="M34 18V30C34 30.55 33.8042 31.0208 33.4125 31.4125C33.0208 31.8042 32.55 32 32 32H16C15.45 32 14.9792 31.8042 14.5875 31.4125C14.1958 31.0208 14 30.55 14 30V18C14 17.45 14.1958 16.9792 14.5875 16.5875C14.9792 16.1958 15.45 16 16 16H32C32.55 16 33.0208 16.1958 33.4125 16.5875C33.8042 16.9792 34 17.45 34 18ZM16 20H32V18H16V20ZM16 24V30H32V24H16Z" fill="#00DF5E"/>
  </g>
</svg>

);
export default IconCart;