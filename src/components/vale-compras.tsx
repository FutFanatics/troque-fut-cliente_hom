import React, { useState, useEffect } from "react";
import { STextParagraph } from "../componentsStyled/Text";
import CardVale from "./cardvale";

interface ValeComprasProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: (evento: React.FormEvent<HTMLFormElement>) => void;
  alternarElemento?: () => void;
  updateData?: (data: any) => void;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const ValeCompras: React.FC<ValeComprasProps> = ({ className,onCheckboxChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxMarcado(checked);
    onCheckboxChange(event);
  };
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);
  return (
    <>
      <div className="col-md-8">
        <STextParagraph fontSize="16px" fontWeight={400} padding="0px 64px">
          O seu <strong>Vale Compras</strong> será enviado diretamente para o
          e-mail cadastrado na Fut.
        </STextParagraph>
        <CardVale></CardVale>
        <div className="d-flex mt-3  mb-5 justify-content-start align-items-center">
          <input
            type="checkbox"
            required
            onChange={handleCheckboxChange}
          ></input>
          <STextParagraph
            fontSize="13px"
            fontSizesm="12px"
            padding="0px 0px 0px 8px"
          >
            Ao continuar, você declara que está de acordo com os termos da&nbsp;
            <a
              href="https://www.futfanatics.com.br/politica-de-privacidade"
              target="_blank"
            >
              Política de Privacidade
            </a>
          </STextParagraph>
        </div>
      </div>
    </>
  );
};

export default ValeCompras;
