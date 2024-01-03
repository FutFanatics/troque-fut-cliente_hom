import React from 'react';
interface ArrowRightProps{
    className?:string;
    width?:number;
    fill?:string;
    height?:string;
}

const IconArrowRight: React.FC<ArrowRightProps> = ({ className , width, height, fill }) => (
    <svg className={className} width={width} height={height}viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_658_2379" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_658_2379)">
<path d="M9.64975 7.99935L4.74975 3.09935C4.58308 2.93268 4.50253 2.73546 4.50808 2.50768C4.51364 2.2799 4.59975 2.08268 4.76641 1.91602C4.93308 1.74935 5.1303 1.66602 5.35808 1.66602C5.58586 1.66602 5.78308 1.74935 5.94975 1.91602L11.0664 7.04935C11.1997 7.18268 11.2997 7.33268 11.3664 7.49935C11.4331 7.66602 11.4664 7.83268 11.4664 7.99935C11.4664 8.16602 11.4331 8.33268 11.3664 8.49935C11.2997 8.66602 11.1997 8.81602 11.0664 8.94935L5.93308 14.0827C5.76641 14.2493 5.57197 14.3299 5.34975 14.3244C5.12753 14.3188 4.93308 14.2327 4.76641 14.066C4.59975 13.8993 4.51641 13.7021 4.51641 13.4743C4.51641 13.2466 4.59975 13.0493 4.76641 12.8827L9.64975 7.99935Z" fill="white"/>
</g>
</svg>

    );
export default IconArrowRight;