import React, { useState } from 'react';
import { STextParagraph } from "../componentsStyled/Text";

interface SharedCheckboxProps {
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SharedCheckboxComponent: React.FC<SharedCheckboxProps> = ({ onCheckboxChange }) => {
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxMarcado(checked);
    onCheckboxChange(event);
  };

  return (
    <div className="d-flex mt-3 mb-5 justify-content-start align-items-center">
      <input
        type="checkbox"
        required
        onChange={handleCheckboxChange}
        checked={checkboxMarcado}
      />
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
  );
};

export default SharedCheckboxComponent;
