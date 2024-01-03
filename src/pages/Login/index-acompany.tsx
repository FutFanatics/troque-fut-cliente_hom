import React, { useState } from "react";
import IconFut from "../../componentsStyled/icon/iconfut";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";
import Header from "../../components/header";
import Validation from "../../components/validation";
import ValidationAcompany from "../../components/validationacompany";
import {  useNavigate } from "react-router-dom";
import { STextParagraph } from "../../componentsStyled/Text";
import Button from "../../componentsStyled/Button";
import IconBack from "../../componentsStyled/icon/Iconback";
import DevBottom from "../../componentsStyled/icon/devbottom";
import DevTop from "../../componentsStyled/icon/devtop";

interface LoginProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const LoginAcompany: React.FC<LoginProps> = ({ className }) => {
  const navigate = useNavigate();
  const handleHome = () =>{
    navigate("/");
  }
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
    <Header></Header>
    <div className="c-login position-relative">
    <DevTop className="position-absolute arrow-top arrow-top_login" width={200}></DevTop>
    <DevBottom className="position-absolute arrow-bottom"/>
    <div className="container container-login">
    <Button typeButton="voltar" margin="16px 0px 0px 0px" onClick={handleBack}>
          <IconBack width={20}></IconBack>
          Voltar
        </Button>
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
              <button onClick={handleHome} style={{border:'none', background:'none'}}>
                <TroqueFut width={200} className="logo-troque"></TroqueFut>
              </button>
            <STextParagraph margin="64px 0px 0px 0px" fontSize="16px" fontWeight={400}>
            Para acessar a plataforma, faça o login abaixo:
            </STextParagraph>
            <ValidationAcompany></ValidationAcompany>
        </div>
        
    </div>
    </div>
    </>
  );
};

export default LoginAcompany;