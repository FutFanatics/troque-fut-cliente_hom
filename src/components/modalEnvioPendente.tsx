import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconEnviado from "../componentsStyled/icon/Iconenviado";
import IconEnvioPendente from "../componentsStyled/icon/Iconenviopendente";

interface ModalEnvioPendenteProps extends ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

interface ModalProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  describe?: React.ReactNode;
  className?: string;
}

const ModalEnvioPendente: React.FC<ModalEnvioPendenteProps> = ({
  isOpen,
  onRequestClose,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className} flex-column`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconEnvioPendente width={60}></IconEnvioPendente>
        <SH1 typeTitle="devolution-modal">
        <strong className="blue">Envio</strong>&nbsp;Pendente!
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
        Nós já enviamos as informações referentes ao envio do seu pedido. Verifique seu
e-mail e, caso haja algum problema, entre em contato com o nosso SAC.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalEnvioPendente;
