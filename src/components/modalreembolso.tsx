import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";

import IconDevreembolso from "../componentsStyled/icon/Icondevreembolso";

interface ModalReembolsoProps extends ModalProps {
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

const ModalReembolso: React.FC<ModalReembolsoProps> = ({
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
      className={`c-modal_devolution ${className}`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconDevreembolso width={60}></IconDevreembolso>
        <SH1 typeTitle="devolution-modal">
          <strong className="green">Reembolso</strong> em Progresso!
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
          Sua solicitação de Devolução foi aprovada! Já estamos processando a
          sua opção de recebimento.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalReembolso;
