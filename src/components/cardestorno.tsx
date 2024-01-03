import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import IconCart from "../componentsStyled/icon/iconcart";
import IconPix from "../componentsStyled/icon/iconPix";
import IconBank from "../componentsStyled/icon/iconbank";

interface CardEstornoProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const CardEstorno: React.FC<CardEstornoProps> = ({ className }) => {

  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
          <Box className="flex-column d-flex align-items-center col-4" margin="0px">
            <IconCart width={50}></IconCart>
            <SspanText typeSpan="reembolso" padding="12px 0px 0px 0px">Em até</SspanText>
            <SspanText typeSpan="reembolso">duas faturas</SspanText>
          </Box>
          <Box className="flex-column d-flex align-items-center col-4" margin="0px"> 
            <IconPix width={50}></IconPix>
            <SspanText typeSpan="reembolso" padding="12px 0px 0px 0px">Através da</SspanText>
            <SspanText typeSpan="reembolso">mesma chave PIX</SspanText>
          </Box>
          <Box className="flex-column d-flex align-items-center col-4" margin="0px">
            <IconBank width={50}></IconBank>
            <SspanText typeSpan="reembolso" padding="12px 0px 0px 0px">Transferência</SspanText>
            <SspanText typeSpan="reembolso">Bancária</SspanText>
          </Box>
      </div>
    </>
  );
};

export default CardEstorno;
