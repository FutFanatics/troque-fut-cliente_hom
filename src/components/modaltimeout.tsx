import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import SlidesProducts from "./slidesproducts";
import { useLocation, useNavigate  } from "react-router-dom";
import axios from "axios";
import Button from "../componentsStyled/Button";
import IconTimeout from "../componentsStyled/icon/icontimeout";


interface ModalTimeoutProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

const ModalTimeout: React.FC<ModalTimeoutProps> = ({
  isOpen,
  onRequestClose,

}) => {
  const handleRedirect =()=>{
    window.location.href = "/";
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="c-modal_devolution d-flex flex-column"
    >
      <div className="container d-flex flex-column align-items-center">
      <IconTimeout width={60}></IconTimeout>
        <SH1 typeTitle="devolution-modal">
          <strong className="blue">Tempo esgotado!</strong>
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe" padding="8px 0px">
        Por questões de segurança, as alterações de solicitações têm um período de 3h.
Para recomeçar o processo, clique abaixo:
        </STextParagraph>
      </div>
      <Button typeButton="back" onClick={handleRedirect} className="welcome">
      Ir para o Início
      </Button>
    </Modal>
  );
};

export default ModalTimeout;
