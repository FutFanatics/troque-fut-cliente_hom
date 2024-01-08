import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import ImgClique from "../img/icon/cliqueretire.png";
import MapClique from "./mapclique";
import ModalAceite from "./modalaceite";
import React, { useState } from "react";
import ModalClique from "./modalclique";
import IconInformative from "../componentsStyled/icon/iconinformative";

interface CliqueRetireProps {
  className?: string;
  onSelect: () => void;
  selected: boolean;

}
const CliqueRetire: React.FC<CliqueRetireProps> = ({ className,  selected, onSelect }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Selecionar");

 

  const handleButtonClick = () => {
    onSelect();
    setButtonText("Selecionado");
  };

  return (
    <>
      <Box typeBox="envio" className={`col-11 col-md-7 position-relative envio-clique ${selected ? "selected-box" : ""}`}>
        <div className="info-clique position-absolute  ">
          <IconInformative width={24} height={24} className="informative">
        </IconInformative>
        <div className="box-information">
            Dúvidas de como funciona?
            Acesse nossa <a href="https://www.cliqueretire.com.br/perguntas-frequentas-faq/">Central de ajuda</a>
          </div>
        </div>
        
        <img src={ImgClique} className="icon" />

        <div className="box-text">
          <li>
            Você deverá levar o produto até um locker de sua escolha;
          </li>
          <li>
            Assim que aprovado, você receberá um QR Code via e-mail para a devolução.
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
export default CliqueRetire;
