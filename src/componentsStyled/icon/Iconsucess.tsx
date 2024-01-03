import React from "react";
interface SucessProps {
  className?: string;
  width?: number;
  fill?: string;
  height?: string;
}

const IconSucess: React.FC<SucessProps> = ({
  className,
  width,
  height,
  fill,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
 <mask id="mask0_658_4774" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_658_4774)">
<path d="M7.06665 9.20065L5.63331 7.76732C5.51109 7.6451 5.35554 7.58398 5.16665 7.58398C4.97776 7.58398 4.8222 7.6451 4.69998 7.76732C4.57776 7.88954 4.51665 8.0451 4.51665 8.23398C4.51665 8.42287 4.57776 8.57843 4.69998 8.70065L6.59998 10.6007C6.73331 10.734 6.88887 10.8007 7.06665 10.8007C7.24442 10.8007 7.39998 10.734 7.53331 10.6007L11.3 6.83398C11.4222 6.71176 11.4833 6.55621 11.4833 6.36732C11.4833 6.17843 11.4222 6.02287 11.3 5.90065C11.1778 5.77843 11.0222 5.71732 10.8333 5.71732C10.6444 5.71732 10.4889 5.77843 10.3666 5.90065L7.06665 9.20065ZM7.99998 14.6673C7.07776 14.6673 6.21109 14.4923 5.39998 14.1423C4.58887 13.7923 3.88331 13.3173 3.28331 12.7173C2.68331 12.1173 2.20831 11.4118 1.85831 10.6007C1.50831 9.78954 1.33331 8.92287 1.33331 8.00065C1.33331 7.07843 1.50831 6.21176 1.85831 5.40065C2.20831 4.58954 2.68331 3.88398 3.28331 3.28398C3.88331 2.68398 4.58887 2.20898 5.39998 1.85898C6.21109 1.50898 7.07776 1.33398 7.99998 1.33398C8.9222 1.33398 9.78887 1.50898 10.6 1.85898C11.4111 2.20898 12.1166 2.68398 12.7166 3.28398C13.3166 3.88398 13.7916 4.58954 14.1416 5.40065C14.4916 6.21176 14.6666 7.07843 14.6666 8.00065C14.6666 8.92287 14.4916 9.78954 14.1416 10.6007C13.7916 11.4118 13.3166 12.1173 12.7166 12.7173C12.1166 13.3173 11.4111 13.7923 10.6 14.1423C9.78887 14.4923 8.9222 14.6673 7.99998 14.6673ZM7.99998 13.334C9.48887 13.334 10.75 12.8173 11.7833 11.784C12.8166 10.7507 13.3333 9.48954 13.3333 8.00065C13.3333 6.51176 12.8166 5.25065 11.7833 4.21732C10.75 3.18398 9.48887 2.66732 7.99998 2.66732C6.51109 2.66732 5.24998 3.18398 4.21665 4.21732C3.18331 5.25065 2.66665 6.51176 2.66665 8.00065C2.66665 9.48954 3.18331 10.7507 4.21665 11.784C5.24998 12.8173 6.51109 13.334 7.99998 13.334Z" fill="#00DF5E"/>
</g>
</svg>

);
export default IconSucess;
