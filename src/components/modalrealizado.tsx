import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconEnviado from "../componentsStyled/icon/Iconenviado";
import { DataFollow } from "./Types";
interface ModalRealizadoProps extends ModalProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  onRequestClose?: () => void;
  data?: DataFollow;
}

interface ModalProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  describe?: React.ReactNode;
  className?: string;
}

const ModalRealizado: React.FC<ModalRealizadoProps> = ({
  isOpen,
  onRequestClose,
  title,
  subtitle,
  icon,
  describe,
  data,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className} flex-column`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconEnviado width={60}></IconEnviado>
        <SH1 typeTitle="devolution-modal">
          <strong className="blue">Solicitação</strong>&nbsp;Realizada!
        </SH1>

        <STextParagraph typeParagraph="paragraphdescribe">
        Sua solicitação já foi enviada e está em análise. Aguarde o retorno do SAC
para dar continuidade ao processo.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default ModalRealizado;
