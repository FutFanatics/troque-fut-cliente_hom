import React from 'react';

interface SelectQuantidadeProps {
  quantityNumber: number;
  onChange: (selectedValue: number | string) => void;
  selectedValue?: number | string;
  obrigatorio?: boolean;
  valor?: string;
  placeholder?: string;
}

const SelectQuantidade: React.FC<SelectQuantidadeProps> = ({
  quantityNumber,
  onChange,
  selectedValue,
  placeholder = 'Selecione uma opção',
}) => {
  const quantities = Array.from({ length: quantityNumber }, (_, i) => i + 1);

  return (
    <select
      onChange={(e) => onChange(Number(e.target.value) || '')}
      value={selectedValue}
      className="list-select"
      required
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {quantities.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectQuantidade;