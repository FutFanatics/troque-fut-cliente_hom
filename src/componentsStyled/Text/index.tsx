import { useNavigate } from "react-router-dom"
import styled from "styled-components";


interface SH1Props{
   typeTitle?:string;
   fontSize?: string;
   margin?: string;
   textTransform?: string;
   fontWeight?: number;
   textAlign?:string;
   color?:string;
   fontSizesm?:string;
    marginsm?:string;
}

interface STextParagraph{
   typeParagraph?:string;
   fontWeight?: number;
   color?: string;
   margin?: string;
   fontSize?: string;
   padding?: string;
   paddingsm?:string;
   fontSizesm?:string;
}

interface SspanText{
   typeSpan?:string;
   fontWeight?: number;
   fontSize?:string;
   padding?: string;
   color?:string;
   fontSizesm?:string;
}

export const SH1 =styled.h1<SH1Props>`
    font-size: ${(props) => props.fontSize || '22px'};
    color: ${(props) => props.color || '#000'};
    font-weight: ${(props) => props.fontWeight || 700};
    text-align: ${(props) => props.textAlign || 'center'};
    margin: ${(props) => props.margin || '16px 0px'};
    font-family: 'Gotham';
    text-transform: ${(props) => props.textTransform || 'none'};

    @media screen and (max-width: 768px) {
        font-size: ${(props) => props.fontSizesm || '16px'};
        margin: ${(props) => props.marginsm || '16px 0px'};
     }


    ${props => props.typeTitle === 'product' && `
        font-size: 20px;
        color:#000;
        margin:0px;
        font-weight:500;
    

        @media screen and (max-width: 768px) {
           font-size:16px
        }
    `}
    ${props => props.typeTitle === 'title-product' && `
        color:#192c53;
        @media screen and (max-width: 768px) {
           font-size:16px
        }
    `}
    ${props => props.typeTitle === 'acompanhe' && `
        color:#777777;
        font-size:14px;
        font-weight:400;
        padding-right:32px;

        @media screen and (max-width: 768px) {
           font-size:14px;
           margin-top:0px;
           width:100%;
           text-align:start;
        }
    `}
    ${props => props.typeTitle === 'devolution-modal' && `
        font-size:16px;
        margin:16px 0px 4px 0px;

        .yellow{
           color: #E3C10B;
        }
        .blue{
            color:#192c53;
        }
        .green{
            color:#00DF5E;
        }
        .red{
            color:#CE0000;
        }
        .bank{
            font-size:14px;
        }
        
        @media screen and (max-width: 768px) {
           font-size:16px
        }
    `}
    ${props => props.typeTitle === 'negative-modal' && `
        font-size:14px;
        margin:4px 0px 8px 0px;
        font-weight:550;

        .yellow{
           color: #E3C10B;
        }
        .blue{
            color:#192c53;
        }
        .green{
            color:#00DF5E;
        }
        .red{
            color:#CE0000;
        }
        @media screen and (max-width: 768px) {
           font-size:18px
        }
    `}
 `

 export const STextParagraph=styled.p<STextParagraph>`
    font-size: ${(props) => props.fontSize || '18px'};
    line-height: 1.3rem;
    font-weight: ${(props) => props.fontWeight || 350};
    color: ${(props) => props.color || '#000'};
    font-family: 'Gotham';
    text-align: center;
    margin: ${(props) => props.margin || '0px'};
    padding: ${(props) => props.padding || '0px'};
    
    a{
        color:#000
    }
        @media screen and (max-width: 768px) {
            padding: ${(props) => props.paddingsm || '0px'};
            font-size: ${(props) => props.fontSizesm || '16px'};
         }
    
    ${props => props.typeParagraph === 'select' && `
        color:rgba(56,56,56, 0.7);
        font-size:14px;
        text-align:start;
        font-weight:400;

        &.danger{
            color: red
        }
    `}
    ${props => props.typeParagraph === 'pedido' && `
        text-align:start;
        font-weight:350;
        margin-bottom:0px;
        padding-bottom:8px;
        font-size:14px;

        &:last-child{
            padding-bottom:0px;
        }
    `}

    ${props => props.typeParagraph === 'termos' && `
       font-size:14px;
       text-align:start;

       a{
        text-decoration:underline;
        color:#000;
        margin-top:16px;
       }
       @media screen and (max-width:768px){
            font-size:13px;
       }
    `}

    ${props => props.typeParagraph === 'paragraphfooter' && `
        padding-bottom:0px;
        font-size:10px;
        padding-top:0px;
        color:#192C53;
        font-weight:500;
        line-height:1rem;
        margin-bottom:0px;

        @media screen and (max-width: 768px) {
            padding-top:20px;
            font-size:8px;
        }
    `}
    ${props => props.typeParagraph === 'paragraphdevolution' && `
        font-size:14px;
        font-weight:600;
        text-align:center;

        strong{
            color:red;
        }
    `}
    
    ${props => props.typeParagraph === 'paragraphdescribe' && `
        font-size:13px;
        font-weight:400;
        text-align:center;

        strong{
            color:black;
        }
    `}

 `


 export const SspanText = styled.span<SspanText>`
      font-size: ${(props) => props.fontSize || '18px'};
      font-family: 'gotham';
      padding: ${(props) => props.padding || '0px'};
      font-weight: ${(props) => props.fontWeight || 350};
      color:${(props) => props.color || '#000'};
      
      .link-senha{
        color:#192c53;
        text-decoration:none;
    }
    ${props => props.typeSpan === 'negative-modal' && `
        font-size:13px;
        margin:4px 0px 8px 0px;
        font-weight:500;
        text-align:center;
        .red{
            color:#CE0000;
        }
        `}
    @media screen and (max-width: 768px) {
        font-size: ${(props) => props.fontSizesm || '12px'};
     }
      ${props => props.typeSpan === 'inative' && `
        color:#777777;
        `}
        ${props => props.typeSpan === 'reembolso' && `
        font-size:13px;

        @media screen and (max-width: 768px) {
            font-size:12px;
         }
    `}
        ${props => props.typeSpan === 'active' && `
        color:#000;
        font-weight:500;
        text-align:center;
        font-size:16px;
        `}
        ${props => props.typeSpan === 'inative' && `
            color:#777;
            font-weight:500;
            font-size:16px;
            text-align:center;
        `}
        
        ${props => props.typeSpan === 'namProduct' && `
            color:#777777;
            font-size:14px;

        `}
        @media screen and (max-width: 768px) {
            ${props => props.typeSpan === 'active' && `
                font-size:11px;
            `}
            ${props => props.typeSpan === 'inative' && `
                font-size:11px;
            `}
        }
 `