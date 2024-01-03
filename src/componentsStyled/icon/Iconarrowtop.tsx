import React from "react";

interface ArrowTopProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: number;
  style?: React.CSSProperties;
}
const IconArrowTop: React.FC<ArrowTopProps> = ({ className, width, height, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 13 8"
    style={style}
  >
<path d="M-3.05691e-05 6.07753L1.17831 7.25586L6.42247 2.0117L11.6666 7.25586L12.845 6.07753L7.01163 0.244202C6.68581 -0.0816343 6.15913 -0.0816342 5.83331 0.244202L-3.05691e-05 6.07753Z" fill="black"/>
</svg>

);
export default IconArrowTop;
