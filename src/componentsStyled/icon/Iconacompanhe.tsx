import React from 'react';

interface AcompanheProps{
    className?:string;
    width?:number;
    fill?:string;
}
const IconAcompanhe: React.FC<AcompanheProps> = ({ className , width }) =>(
    <svg className={className} width={width} height="30" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.0019 8.11068L41.0852 5.00443C35.8904 2.27981 33.293 0.916016 30.5003 0.916016C27.7077 0.916016 25.1102 2.27685 19.9154 5.00443L18.9658 5.50439L45.363 20.5889L57.2437 14.6427C55.3326 12.4772 52.25 10.859 47.0019 8.10477V8.11068ZM59.3382 18.5595L47.5107 24.4762V33.4577C47.5107 34.0461 47.277 34.6105 46.8609 35.0266C46.4448 35.4427 45.8804 35.6764 45.292 35.6764C44.7035 35.6764 44.1392 35.4427 43.7231 35.0266C43.307 34.6105 43.0732 34.0461 43.0732 33.4577V26.692L32.7191 31.8691V59.7987C34.8432 59.2691 37.2601 58.003 41.0852 55.9943L47.0019 52.888C53.3653 49.5481 56.5485 47.8796 58.3175 44.8769C60.0837 41.8771 60.0837 38.1407 60.0837 30.6769V30.3307C60.0837 24.7306 60.0837 21.2279 59.3382 18.5595ZM28.2816 59.7987V31.872L1.66249 18.5595C0.916992 21.2279 0.916992 24.7306 0.916992 30.3248V30.6709C0.916992 38.1407 0.916992 41.8771 2.68312 44.8769C4.4522 47.8796 7.63537 49.551 13.9987 52.891L19.9154 55.9943C23.7405 58.003 26.1575 59.2691 28.2816 59.7987ZM3.75699 14.6456L30.5003 28.0173L40.5912 22.9734L14.3035 7.95093L13.9987 8.11068C8.75362 10.8619 5.66808 12.4801 3.75699 14.6486V14.6456Z" fill="#FFF"/>
    </svg>


);
export default IconAcompanhe;