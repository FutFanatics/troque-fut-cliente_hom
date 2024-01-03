import React, { useCallback } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconNegada from "../componentsStyled/icon/Iconnegada";

interface ModalDevolutionProps extends ModalProps {
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

const ModalDevolution: React.FC<ModalDevolutionProps> = ({
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
      <IconNegada width={60}></IconNegada>
        <SH1 typeTitle="devolution-modal">
            Poxa,Craque!
        </SH1>
        <STextParagraph typeParagraph="paragraphdevolution">
              Sua solicitação de devolução foi
              <strong> negada.</strong>
            </STextParagraph>
            <STextParagraph typeParagraph="paragraphdescribe">
              Caso tenha alguma dúvida, entre em contato pelo <strong>site</strong>, pelo nosso
              <strong> SAC: (11)4858-3500</strong> ou email de contato: <strong>contato@futfanatics.com.br</strong>

            </STextParagraph>
        
      </div>


      <Button typeButton="back" onClick={onRequestClose}>Voltar</Button>
    </Modal>
  );
};

export default ModalDevolution;
