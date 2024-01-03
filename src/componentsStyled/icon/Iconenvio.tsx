import React from "react";

interface SolicitacaoProps {
  className?: string;
  width?: number;
  fill?: string;
  style?: React.CSSProperties;
  height?: number;
}
const IconSolicitacao: React.FC<SolicitacaoProps> = ({ className, width, height,style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 20"
    style={style}
  >
<path d="M8 19.725V10.575L0 5.95V13.975C0 14.3417 0.0875 14.675 0.2625 14.975C0.4375 15.275 0.683333 15.5167 1 15.7L8 19.725ZM10 19.725L17 15.7C17.3167 15.5167 17.5625 15.275 17.7375 14.975C17.9125 14.675 18 14.3417 18 13.975V5.95L10 10.575V19.725ZM13.975 5.975L16.925 4.25L10 0.275C9.68333 0.0916667 9.35 0 9 0C8.65 0 8.31667 0.0916667 8 0.275L6.025 1.4L13.975 5.975ZM9 8.85L11.975 7.15L4.05 2.55L1.05 4.275L9 8.85Z" />
</svg>
);
export default IconSolicitacao;
