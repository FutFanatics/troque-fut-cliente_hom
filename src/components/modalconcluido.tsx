import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconDevreembolso from "../componentsStyled/icon/Icondevreembolso";

interface ModalConcluidoProps extends ModalProps {
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

const ModalConcluido: React.FC<ModalConcluidoProps> = ({
  isOpen,
  onRequestClose,
  title,
  subtitle,
  icon,
  describe,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className} flex-column`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconDevreembolso width={60}></IconDevreembolso>
        <SH1 typeTitle="devolution-modal"><strong className="blue">Solicitação Concluída!</strong></SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
          A sua solicitação de Devolução foi concluída. Qualquer problema ou
          inconsistência, entre em contato pelo <strong>site</strong>, pelo
          nosso <strong>SAC: (11)4858-3500 </strong>
          ou email de contato: <strong>contato@futfanatics.com.br </strong>
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalConcluido;
