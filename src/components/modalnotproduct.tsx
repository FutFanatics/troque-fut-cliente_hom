import React, { useCallback, useEffect } from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import Button from "../componentsStyled/Button";
import axios from "axios";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconNegada from "../componentsStyled/icon/Iconnegada";

interface ModalNotProductProps extends ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
  onInterval?: () => void;
}

interface ModalProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  describe?: React.ReactNode;
  className?: string;
}

const ModalNotProduct: React.FC<ModalNotProductProps> = ({
  isOpen,
  onRequestClose,
  title,
  subtitle,
  icon,
  describe,
  className,
}) => {
  const handleBack = useCallback(() => {
    onRequestClose();
    window.location.href = "https://www.futfanatics.com.br";
  }, [onRequestClose]);
  useEffect(() => {

    const intervalId = setInterval(() => {
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`c-modal_devolution ${className}`}
    >
      <div className="container d-flex flex-column align-items-center">
        <IconNegada width={60}></IconNegada> 
        <SH1 typeTitle="devolution-modal">
            Poxa,Craque!
        </SH1>
        <SH1 typeTitle="negative-modal" fontSize="14px" margin="0px">
            Parece que você ainda não tem <strong className="red">nenhum pedido!</strong>
        </SH1>
        <STextParagraph typeParagraph="paragraphdescribe">
              Acesse nosso site e conheça nossos
            </STextParagraph>
            <STextParagraph typeParagraph="paragraphdescribe">
              milhares de produtos:

            </STextParagraph>

        <button className="back-site" onClick={handleBack}>
        Acessar
      </button>
      </div>

      
    </Modal>
  );
};

export default ModalNotProduct;
