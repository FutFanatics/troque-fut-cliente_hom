import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";

interface ModalAnaliseProps extends ModalProps {
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

const ModalAnalise: React.FC<ModalAnaliseProps> = ({
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
        <IconAnalise width={60}></IconAnalise>
        <SH1 typeTitle="devolution-modal">
          Em <strong className="yellow">Análise!</strong>
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
        Seu pedido já chegou, a solicitação está em processo
        de análise.
        Aguarde por atualizações.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalAnalise;
