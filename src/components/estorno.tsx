import React, { useState } from "react";
import CampoTexto from "./campotexto";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";
import CardEstorno from "./cardestorno";

interface EstornoProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
}

const Estorno: React.FC<EstornoProps> = ({ className }) => {

  return (
    <>
      <div className="col-md-8">
      <STextParagraph fontSize="16px" fontWeight={400} padding="0px 30px">
        O <strong>estorno</strong> será efetivado através do mesmo método de pagamento utilizado na hora da compra.
      </STextParagraph>
      <CardEstorno></CardEstorno>
      </div>
    </>
  );
};

export default Estorno;
