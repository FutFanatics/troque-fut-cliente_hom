import React from "react";

interface AddProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
  onClick?: () => void;
}
const IconAdd: React.FC<AddProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
<mask id="mask0_899_1086" maskUnits="userSpaceOnUse" x="-1" y="0" width="25" height="24">
<rect x="-0.000183105" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_899_1086)">
<path d="M10.9998 13H4.99982V11H10.9998V5H12.9998V11H18.9998V13H12.9998V19H10.9998V13Z" fill="#1C1B1F"/>
</g>
</svg>
);
export default IconAdd;
