import React from "react";

interface LdnProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
}
const IconLdn: React.FC<LdnProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
  >

<mask id="mask0_1241_1184" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.330078" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1241_1184)">
<path d="M6 22.3301C5.45 22.3301 4.97917 22.1342 4.5875 21.7426C4.19583 21.3509 4 20.8801 4 20.3301V4.33008C4 3.78008 4.19583 3.30924 4.5875 2.91758C4.97917 2.52591 5.45 2.33008 6 2.33008H14L20 8.33008V20.3301C20 20.8801 19.8042 21.3509 19.4125 21.7426C19.0208 22.1342 18.55 22.3301 18 22.3301H6ZM13 9.33008V4.33008H6V20.3301H18V9.33008H13Z" fill="#192C53"/>
<path d="M13 11.3301H11V15.5051L9.425 13.9301L8 15.3301L12 19.3301L16 15.3301L14.6 13.9051L13 15.5051V11.3301Z" fill="#192C53"/>
</g>
</svg>

);
export default IconLdn;
