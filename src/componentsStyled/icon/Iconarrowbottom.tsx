import React from "react";

interface ArrowBottomProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
  style?: React.CSSProperties;
}
const IconArrowBottom: React.FC<ArrowBottomProps> = ({ className, width, height, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 13 8"
    style={style}
  >
<path d="M-3.05691e-05 1.17833L1.17831 -5.09966e-07L6.42247 5.24416L11.6666 -5.15068e-08L12.845 1.17833L7.01163 7.01166C6.68581 7.33749 6.15913 7.33749 5.83331 7.01166L-3.05691e-05 1.17833Z" fill="black"/>
</svg>


);
export default IconArrowBottom;
