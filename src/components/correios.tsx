import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ImgClique from "../img/icon/correios.png";
import React, { useState } from "react";
import ModalAceite from "./modalaceite";
import IconInformative from "../componentsStyled/icon/iconinformative";

interface CorreiosProps {
  className?: string;
  onSelect: () => void;
  selected: boolean;
}
const Correios: React.FC<CorreiosProps> = ({ className,  selected, onSelect }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Selecionar");

  const handleButtonClick = () => {
    onSelect();
    setButtonText("Selecionado");
  };

  return (
    <>
      <Box typeBox="envio" className={`col-11 col-md-7 ${selected ? "selected-box" : ""}`}>
        <img src={ImgClique} className="icon" />

        <div className="box-text">
          <li>
          Você deverá levar o produto até uma agência dos Correios;
          </li>
          <li>
          Assim que aprovado, será enviado um código reverso para o seu e-mail.
          </li>
        </div>
        <Button 
        typeButton="select" 
        margin="0px auto" 
        onClick={handleButtonClick}
        className={selected ? "clicked" : ""}
        >
          {buttonText}
        </Button>
        
      </Box>
    </>
  );
};
export default Correios;
