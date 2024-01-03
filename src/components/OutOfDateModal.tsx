import React from "react";
import Modal from "react-modal";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import IconProduct from "../componentsStyled/icon/iconproduct";

import SlidesProducts from "./slidesproducts";
import IconNegada from "../componentsStyled/icon/Iconnegada";


interface OutOfDateModalProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  onRequestClose?: () => void;
  onClose: () => void; // Add this line to the interface
}

const OutOfDateModal: React.FC<OutOfDateModalProps> = ({
  isOpen,
  onRequestClose,
  onClose, 
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="c-modal_devolution flex-column"
    >
      <div className="container d-flex flex-column align-items-center">
        <IconNegada width={60}></IconNegada>
        <SH1 typeTitle="devolution-modal">
          Poxa, Craque! 
        </SH1>
        <SspanText typeSpan="negative-modal">
          Parece que o prazo para essa troca já foi <strong className="red">excedido</strong> 
        </SspanText>

        <STextParagraph typeParagraph="paragraphdescribe">
        Infelizmente não poderemos prosseguir com a sua solicitação de devolução.
O prazo de devolução dos produtos dessa categoria é de 30 dias.
        </STextParagraph>
      </div>

      <Button typeButton="back" onClick={onRequestClose}>
        Voltar
      </Button>
    </Modal>
  );
};

export default OutOfDateModal;
