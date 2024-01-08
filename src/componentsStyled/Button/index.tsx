import { ClassNames } from "@emotion/react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IButton {
    className?:string;
    path?: string;
    typeButton?: string;
    children: React.ReactNode;
    margin?: string;
    border?:string;
    color?:string;
    onClick?: () => void;
    background?: string; 
    borderRadius?:string;   
    width?:string;
    height?: string;
    disabled?: boolean;
    type?: string; 
}

interface SButtonProps {
    typeButton?: string;
    background?: string; 
    margin?: string;
    border?:string;
    color?:string;
    borderRadius?:string;
    width?:string;
    className?:string;
    height?: string; 
    disabled?: boolean;
}

const SButton = styled.button<SButtonProps>`
    background: ${(props) => props.background || '#192C53'};
    border-radius: ${(props) => props.borderRadius || '50px'};
    color: ${(props) => props.color || '#FFF'};
    font-weight: 350;
    border: ${(props) => props.border || 'none'}; 
    width: 380px; 
    height: ${(props) => props.height || '45px'};   
    font-size: 16px;
    justify-content: center;
    display: flex;
    font-family: 'gotham';
    align-items: center;
    margin: ${(props) => props.margin || '16px 0px 24px 0px'};

    &:disabled{
        opacity:0.5;
    }
    

    a{
        color: #fff;
        text-decoration: none;
        width: 100%;
        
        text-align: center;

        &:hover{
            color: #fff;
        }
    }

    span{
        padding-left: 8px;
    }

    
    @media screen and (max-width: 768px) {
        width: 300px;
    }


    ${props => props.typeButton === 'devolucao' && `
        background-color: #222222;
        margin-top:16px;
    `}

    ${props => props.typeButton === 'select' && `
        width:120px;
        border-radius:5px;
        height:40px;
        background:transparent;
        color:#192C53;
        font-size:15px;
        border:1px #192C53 solid;
        font-weight:400;
        margin:0px auto;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
    `}
    ${props => props.typeButton === 'upload' && `
        width:150px;
        border-radius:5px;
        height:40px;
        font-size:15px;
        margin:24px auto 0px auto;
        border:1px #192C53 solid;
        font-weight:400;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
        &.disabled{
            background:#d9d9d9;
            color:#fff;
            border:none;
            cursor:auto;
        }
    `}
    ${props => props.typeButton === 'back' && `
        width:80px;
        border-radius:5px;
        height:40px;
        font-size:15px;
        margin:24px auto 0px auto;
        border:1px #192C53 solid;
        font-weight:400;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
        &.welcome{
            width:180px;
        }
    `}
    ${props => props.typeButton === 'select-estorno' && `
            border:none;
            width:auto;
            margin-bottom:0px;
            border-radius:0px;
            background:transparent;
            color:#777;
            height:auto;
            margin 0px 16px 0px 0px;

            &.active{
                color:#192c53;
                font-weight:600;
                border-bottom:#192c53 solid  1px
            }
            @media screen and (max-width: 768px) {
                width:auto;
            }
    `}
    ${props => props.typeButton === 'devolution-status' && `
            width:100%;
            height:30px;
            font-size:15px;
            margin-top:8px;
            margin-bottom:0px;

            &.concluída{
                background:transparent;
                border:1px solid #00DF5E;
                color:#00DF5E;
            }
            svg{
                margin:0px 8px;
            }
    `}
    ${props => props.typeButton === 'search' && `
            width:40px;
            height:40px;
            border-radius:100px;

            @media screen and (max-width: 768px) {
                width:35px;
                height:35px;
            }
    `}
    ${props => props.typeButton === 'followdevolution' && `
        border-radius:5px;
        border:1px solid #192c53;
        color:#193c53;
        padding:0px 8px;
        background:transparent;
        width:auto;
        min-width:120px;
        max-height:150px;
        height:40px;
        font-weight:400;
        margin:0px auto;
        font-size:14px;
        cursor:pointer;
        margin:16px auto 0px auto;

        &.red{
            color:#CE0000;
            border:1px solid #CE0000;
        }
    `}
    ${props => props.typeButton === 'voltar' && `
        border:none;
        background:none;
        width:auto;
        color:#000;
        font-weight:400;
        display:flex;
        align-items:center;
    `}
    @media screen and (max-width: 768px) {
        ${props => props.typeButton === 'select' && `
            width:120px;
            height:45px;

            &.clicked{
                background:#192C53;
                color:#fff;
                height:45px;
                width:120px;
            }
        `}
        ${props => props.typeButton === 'back' && `
            width:150px;
            border-radius:5px;
            height:40px;
            font-size:15px;
            margin:24px auto 0px auto;
            border:1px #192C53 solid;
            font-weight:400;
        `}
        ${props => props.typeButton === 'voltar' && `
            width:auto;
            font-size:14px;
            margin-bottom:16px;
        `}
        ${props => props.typeButton === 'devolution-status' && `
            width:auto;
            font-size:14px;
            padding:0px 16px;
            margin:16px auto 0px auto;
        `}
    }
    
`

export default function Button({ children, path = "", typeButton="", background="", border="", color="", margin="", onClick, borderRadius="", height="", className=""}: IButton) {

    const navigate = useNavigate();

    const handleClick = () => {

        if(path) {
            navigate(path);
        }
        if (onClick) {
            onClick(); 
          }
    };

    return (
        <SButton onClick={handleClick} typeButton={typeButton} background={background} border={border} color={color} margin={margin} borderRadius={borderRadius} height={height} className={className}>{ children }</SButton>
    )

}
