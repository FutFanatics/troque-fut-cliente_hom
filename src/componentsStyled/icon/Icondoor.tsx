import React from 'react';
interface DoorProps{
    className?:string;
    width?:number;
    fill?:string;
}

const IconDoor: React.FC<DoorProps> = ({ className , width }) =>(
    <svg className={className} width={width} viewBox="0 0 29 41" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_43_5279"  maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="41">
    <path d="M2 6.31967V35.2266L14.3306 38.84V2.7063L2 6.31967Z" fill="white" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.3306 6.31958H26.3902V35.2265H14.3306" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.1299 18.9666V22.5799" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </mask>
    <g mask="url(#mask0_43_5279)">
    <path d="M-2.06543 -0.906982H30.4549V42.4535H-2.06543V-0.906982Z" fill="white"/>
    </g>
    </svg>





);
export default IconDoor;