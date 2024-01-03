import { useNavigate } from "react-router-dom"
import styled from "styled-components";



interface SBoxIconFut {
    typeBoxIcon?: string;
}
interface Box{
    typeBox?:string;
    padding?:string;
    margin?: string;
    className?:string;
}



export const SBoxIconFut = styled.div<SBoxIconFut>`
    background-color: rgba(0, 0, 0, 0.57);
    border-radius: 50px;
    color: #FFF;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 30px;
    }
    
`


export const Box = styled.div<Box>`
    margin: ${(props) => props.margin || '0px 16px'};
    padding: ${(props) => props.padding || '0px 16px'};
    ${props => props.typeBox === 'estorno' && `
        border: 1px solid rgba(0, 0, 0, 0.40);
        display:flex;
        padding:32px 32px 32px 32px;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        margin-bottom:16px;
        margin-top:16px;
        margin-left:0px;
        margin-rigth:0px;
        min-height:512px;

    
        .c-finance{
            width:100%;
            display:flex;
            justify-content:center;
        }
        .container-reembolso{
            width:100%;

            .c-estorno{
                width:60%;
                @media screen and (max-width: 768px) {
                    width:100%;
                }
            }
        }
        .c-box-product{
            font-family:"gotham";
            width:30%;

            @media screen and (max-width: 768px) {
                width:100%;
                margin-bottom:16px;
            }
            img{
                width:150px;
                height:150px;
                border-radius:10px;
            }
            h1{
                font-size:16px;
                margin-top:16px;
                font-weight:600;
                color:#000;
                text-align:center;
            }
            span{
                font-weight:350;
                text-align:center
            }
        }
        input{
            width:16px; 
            height:16Apx;
        }
    `}
    ${props => props.typeBox === 'item' && `
        height:210px;
        @media screen and (max-width: 768px) {
            margin:0px;
            padding:0px;
        }

    `}
    ${props => props.typeBox === 'atention' && `
        border-radius: 16px;
        border: 1px solid rgba(25, 44, 83, 0.30);
        width:180px;
        height:160px; 
        position:relative;
        display:flex;
        top:15%;
        justify-content:center;
        align-items:center;
        padding:10px 20px 0px 20px;

        svg{
            position:absolute;
            top:-20%;
        }
        @media screen and (max-width: 768px) {
            width:140px;
            height:160px; 
        }
    `}
    ${props => props.typeBox === 'estorno-content' && `
        border-radius: 8px;
        border: 1px solid #00DF5E;
        padding:16px 24px;
        height:250px;
        margin:8px 0px 0px 0px;

    `}
    ${props => props.typeBox === 'icon' && `
        width:80px;
        height:80px;
        border-radius:100px;
        position: absolute;
        top: -20%;
        margin:0px;
        left: 50%;
        transform:translate(-50%);
        display:flex;
        justify-content:center;
        align-items:center;
        background:#F1F1F1;
        box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    `}
    ${props => props.typeBox === 'envio' && `
        margin: 24px 16px 16px 16px;
        padding:40px 40px;
        height:27rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        border-radius:20px;
        border: 1px solid rgba(0, 0, 0, 0.40);
        background-color:transparent;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

        .icon{
            height:75px;
        }
        .info-clique{
            right: 20px;
            top: 20px;
            .informative{
                opacity:0.64;
            }
            .box-information{
                display:none;
            }
            &:hover{
                .box-information{
                    position:absolute;
                    right:30px;
                    top:0px;
                    display:block;
                    background:rgba(00, 00 ,00 ,0.4);
                    color:#fff;
                    padding:8px 8px;
                    font-weight:350;
                    font-size:13px;
                    border-radius:2px;
                    width:200px;
                    height:55px;
                    
                    a{
                        color:#fff;
                        text-decoration:underline;
                    }
                }
            }
        }
        
        .box-text{
            padding:40px 0px 30px;
        }
        li{
            padding-top:16px;
        }

        &.selected-box{
            border:3px solid #192C53;
            background-color:#EFF4FF;
        }
    `}
    ${props => props.typeBox === 'informative' && `
        margin:0px;
        position:relative;
        

            .informative{
                opacity:0.64;
                position:absolute;
                right:-30px;
                bottom:-30px;
                @media screen and (max-width: 768px) {
                    right:0px;
                    bottom:10px;
                }
            }
            .box-informative{
                display:none;
            }
            .text-informative{
                font-size:12px;
                font-family:"gotham";
                color:#000;
                text-align:center;
                font-weight:400;

                .italic{
                    font-style:italic;
                }
            }
            h1{
                font-family:"gotham";
                font-size:14px;
                font-weight:600;
                margin-top:16px;
                color:#000;

                .green{
                    color:#00DF5E;
                }
                .blue{
                    color:#192c53;
                }
            }
            &:hover{
                .box-informative{
                    position:absolute;
                    right:10px;
                    top:0px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    background:#fff;
                    box-shadow: 1px 1px 1px 1px rgba(00,00,00,0.2);
                    color:#000;
                    padding:8px 8px;
                    font-weight:350;
                    font-size:13px;
                    border-radius:2px;
                    width:300px;
                    padding:20px 30px;
                    border-radius:16px;

                    
                    a{
                        color:#fff;
                        text-decoration:underline;
                    }
                    
                }
            }
        
        
    `}
    ${props => props.typeBox === 'productselected' && `
        margin: 16px 12px 16px 0px;
        padding:30px 40px;
        display:flex;
        justify-content:center
        align-items:center;
        border-radius:10px;
        border:1px solid rgba(00,00,00,0.4);

        .icon{
            height:75px;
        }

        .box-text{
            padding:40px 0px 50px;
        }
        li{
            padding-top:16px;
        }

        &:last-child{
            margin: 16px 0px 16px 0px;
        }

        .content-select{
            width:45%;

            @media screen and (max-width: 768px) {
                width:100%;
                margin-top:16px;
            }
        }
        @media screen and (max-width: 768px) {
            padding:10px;
            border:none;
            flex-direction:column;
        }
    `}
    ${props => props.typeBox === 'cam' && `
        width:40px;
        height:40px;
        border-radius:100px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px 8px 0px 0px;
        cursor:pointer;
        background:#192c53;
        padding:0px;
        
        `}
    ${props => props.typeBox === 'termos' && `
        border:1px solid rgba(0,0,0,0.5);
        padding:40px 30px;
        border-radius:20px;

        .box-content{
            max-height:180px;
            overflow:auto;
            padding:0px 5px;

            &::-webkit-scrollbar {
                width: 10px;
              }
              
            &::-webkit-scrollbar-track {
                background: #D9D9D9;
                border-radius: 10px;
            }
              
              
            &::-webkit-scrollbar-thumb {
               background: #192C53;
               border-radius: 10px;
            }
              
             
            &::-webkit-scrollbar-thumb:hover {  
                background: #192C53;
            }
            @media screen and (max-width: 768px) {
                max-height:250px;
             }
        }
                
    `}
    ${props => props.typeBox === 'product' && `
        width:200px !important;
        padding:20px 20px;
        display:flex !important;
        flex-direction: column;
        align-items:center; 
        justify-content:center;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius:15px;
        margin:0px auto;
        left:50%;
        position:relative;
        margin:16px 0px;
        transform:translateX(-50%);



        .produto-box_img{
            border-radius: 10px;
            overflow: hidden;
            width: 140px;
            height: 140px;

            img{
                object-fit:cover;
                width:100%;
            }
        }
        .produto-box_text{
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }


                
    `}
    ${props => props.typeBox === 'product-devolution' && `
        width:220px;
        padding:20px 20px;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-top:8px;
        margin-bottom:8px;

        @media screen and (max-width: 768px) {
            margin:8px auto;
            width:200px;
        }

        .devolution-structure{
            display:flex;
            justify-content:center;
            align-items:center;
        }
        img{
            width: 150px;
            height: 150px;
            border-radius: 10px;
        }
        p{
            text-align:center;
            margin-bottom:0px;
            color:#777;
            font-size:13px;
            font-family:"gotham";
            font-weight:400;

            strong{
                font-weight:600;                
                color:#192c53;
                font-size:17px;
            }
        }
        .slick-prev:before, .slick-next:before{
            display:none;
        }
    `}
    ${props => props.typeBox === 'active' && `
        margin:0px 8px;
    `}
    ${props => props.typeBox === 'active-number' && `
        width: 32px;
        background:#192c53;
        margin:0px 8px;
        height:32px;
        border-radius:50px;
        display:flex;
        justify-content:center;
        align-items:center;
    `}
    ${props => props.typeBox === 'inative-number' && `
    width: 32px;
    background:#777;
    height:32px;
    border-radius:50px;
    display:flex;
    margin:0px 8px;
    justify-content:center;
    align-items:center;
`}
    ${props => props.typeBox === 'upload' && `
        background: #EBEBEB;
        border-radius:8px;
        height:100px;
        width:100px;
        padding:0px 8px;
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            object-fit:cover;
            width:100%;
            height:100%;
        }
    `}
    ${props => props.typeBox === 'login' && `
        
        label{
            font-size:14px;
            font-family:'gotham';
            font-weight:450;
            margin-bottom:8px;
        }
        input{
            border:none;
            border-bottom:1px solid #000;
            width:100% !important;
            opacity:1;

            &::placeholder{
                color:#383838;
                opacity:0.8;
                font-size:15px;
                font-weight:500;
            }
        }
        select{
            color:#192c53;
            font-size:14px;
            border:none;
            opacity:0.5;
            padding-bottom:8px;
            border-bottom:1px solid #000;
            font-weight:500;

        
        }
        input[type="password"]{
            padding:4px;
        }
        .box-radios{
            
            input{
                height:20px;
                width:20px;
                margin:0px 8px 0px 0px ;
                
                &:checked{
                    Background:red;
                    color:red;
                }
            }
            &:last-child{
                margin-left:8px;
            }
            input[type="radio"]:checked {
                background:red;
              }
        }
        .btn-visibility{
            position: absolute;
            right: 20px;
            top: 30px;
            cursor:pointer;
        }

        
    `}
    ${props => props.typeBox === 'datafollow' && `
        border: 1px solid rgba(0, 0, 0, 0.40);
        border-radius:10px;
        padding:40px 30px 20px 30px;
        margin:0px;
        font-family:"gotham";

        &.status{
            @media screen and (max-width: 768px) {
                padding:30px 20px 10px;
            }
        }
        h1{
            text-align:center;
            font-size:18px;
            font-weight:700;
            color:#000;
            width:100%;
            position:relative;
            margin-bottom:16px;

            @media screen and (max-width: 768px) {
                margin-bottom:0px;
                margin-top:0px !important;
            }

            svg{
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                right:0px;
            }
        }
        h2{
            font-size:16px;
            font-weight:400;
            color:#474747;
            margin-bottom:16px;
        }
        label{
            font-size:13px;
            font-weight:400;
        }
        p{
            color:#192c53;
            text-transform:capitalize;
            font-size:14px;
        }
        .content{
            width:49%;
        }
        h3{
            font-weight:500;
            font-size:17px;
            color:#000;
        }
        .content-img{
            width:30%;
            display:flex;
            flex-direction:column;
            align-items:center;

            @media screen and (max-width: 768px) {
                width:100%;
                
            }
        }
        .content-product_describe{
            width:60%;
            @media screen and (max-width: 768px) {
                width:100%;
                margin-top:16px;
            }
        }
        h4{
            font-size:16px;
            font-weight:500;
            color:#000;
            font-family:"gotham";
            @media screen and (max-width: 768px) {
                margin-top:16px;
            }
        }
        .slide{
           width: 80%;
           margin-bottom:16px;
           
            img{
                width:100%;
                border-radius:10px;
            }
        }
        .status-icons{
            margin-top:-10px ;
        }
        .container-icon{
            width:14%;
            align-items:start;
            height:120px;

            @media screen and (max-width: 768px) {
                width:auto;
                height:100px;
            }

        }
        .status-icon{
            width:55px;
            height:55px;
            border-radius:100px;
            display:flex;
            justify-content:center;

            svg{
                width:30px;
                @media screen and (max-width: 768px) {
                    width:25px;
                }
            }
            @media screen and (max-width: 768px) {
                width:45px;
                height:45px;
            }
        }
        .name-status{
            font-size:13px;
            margin-top:8px;
            color:#192c53;
            font-family:"gotham";   
            text-align:center;

            @media screen and (max-width: 768px) {
                font-size:11px;
            }
        }
        .name-date{
            color:#777;
            font-size:13px;

            @media screen and (max-width: 768px) {
                font-size:11px;
            }
        }
        .line{
            width:80px;
            height:2px;
            border-radius:40px;
            background:#00000080;
            position:relative;
            top:-30px;
            margin:0px -8px;
            
            &:last-child{
                display:none;
            }
            @media screen and (max-width: 768px) {
                width:40px;
            }
        }
        @media screen and (max-width: 768px) {
            padding:20px 20px;
            margin-top:16px;
        }
    `}
    ${props => props.typeBox === 'container-devolution' && `
        padding-left:32px;
        margin:0px;
        @media screen and (max-width: 768px) {
            padding:0px;
        }
    `}
    ${props => props.typeBox === 'icon-help' && `
        z-index:99999;
        height:48px;
        width:48px;
        border-radius:100px;
        background:#00DF5E;
        position: fixed;
        bottom: 100px;
        right: 20px;
        padding:0px;
        display:flex;
        justify-content: center;
        align-items:center;
        margin:0px;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
        .informação{
            display:none
        }
        &:hover{
            .informação{
                position:absolute;
                right:50px;
                width:auto;
                top:-10px;
                display:block;
                background:rgba(00, 00 ,00 ,0.4);
                color:#fff;
                padding:8px 8px;
                font-weight:350;
                font-size:13px;
                border-radius:2px;
                min-width:220px;
                height:55px;
                
                @media screen and (max-width: 768px) {
                    min-width:250px;
                }
                a{
                    color:#fff;
                    text-decoration:underline;
                }
            }
            
        }
        @media screen and (max-width: 768px) {
            bottom:10px;
        }
    `}
    ${props => props.typeBox === 'not-dev' && `
        margin:0px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:70px 0px;        
    `}
    @media screen and (max-width: 768px) {
        ${props => props.typeBox === 'estorno' && `
            border:none;
            padding:8px;
            margin-top:0px;
            margin-bottom:0px;
            margin:0px;
        `}
        ${props => props.typeBox === 'termos' && `
            @media screen and (max-width: 768px) {
                padding:40px 10px;
                margin:12px 0px 0px 0px;
            }
        `}
        ${props => props.typeBox === 'active' && `
                margin:0px;
                padding:0px;
            
        `}
        ${props => props.typeBox === 'inative-number' && `
            margin-bottom: 8px;
            margin-bottom: 8px;
            padding:0px;
            width:32px;
            height:32px;
            span{
                font-size:18px;
                text-align:center;
                top: 50%;
                position: relative;
                transform: translateY(-50%);
                @media screen and (max-width: 768px) {
                    font-size:19px;
                }
            }
            
        `}
        ${props => props.typeBox === 'active-number' && `
            margin-bottom: 8px;
            padding:0px;
            width:32px;
            height:32px;
            span{
                font-size:18px;
                text-align:center;
                top: 50%;
                position: relative;
                transform: translateY(-50%);
                @media screen and (max-width: 768px) {
                    font-size:19px;
                }
            }
        `}
    }
`