import React from "react";

interface CheckProps {
  className?: string;
  width?: number;
  fill?: string;
  style?: React.CSSProperties;
  height?: number;
}
const IconCheck: React.FC<CheckProps> = ({ className, width, height,style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 13"
    style={style}
  >
<path d="M6.5501 12.9996L0.850098 7.29961L2.2751 5.87461L6.5501 10.1496L15.7251 0.974609L17.1501 2.39961L6.5501 12.9996Z" />
</svg>
);
export default IconCheck;
