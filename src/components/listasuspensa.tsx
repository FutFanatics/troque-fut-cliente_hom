import React, { useState } from 'react';
import ModalNotProduct from './modalnotproduct';

interface ListaSuspensaProps {
  obrigatorio?: boolean;
  className?: string;
  label?: string;
  items?: { value: string; label: string }[];
  valor?: string;
  onChange?: (selectedOption: string) => void;
}

const ListaSuspensa: React.FC<ListaSuspensaProps> = ({
  className,
  obrigatorio = false,
  label,
  items = [],
  valor,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(valor || '');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (onChange) {
      onChange(selectedValue);
    }
  };

  if (items.length === 0) {
    return <ModalNotProduct isOpen={true} onRequestClose={() => {}} />;
  }

  return (
    <>
      <div className="c-lista_suspensa row justify-content-center">
        <select
          required={obrigatorio}
          value={selectedOption}
          onChange={handleOptionChange}
          className="col-md-10 lista-select"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {items.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="custom-select-icon">&#9660;</div>
      </div>
    </>
  );
};

export default ListaSuspensa;
