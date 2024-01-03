interface ListaSelectedProps<T> {
    options: T[];
    optionsSubReason?: any;
    onChange: (selectedValue: T) => void;
    selectedValue?: T;
    quantityNumber?: number;
    delivery_date?: string;
  }

  function ListaSelected<T extends string | number>({
    options,
    optionsSubReason,
    onChange,
    selectedValue,
    quantityNumber = 0,
  }: ListaSelectedProps<T>) {
    let quantities = [];
  
    for (let i = 1; i <= quantityNumber; i++) {
      quantities.push(i);
    }

    const renderOptions = () => {
      if (quantityNumber > 0) {
        return quantities.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ));
      } else if(optionsSubReason !== undefined && optionsSubReason.length > 0 ) {
        
        return optionsSubReason.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ));
      } else {
        return options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ));
      }
    };
  
    return (
      <select
        onChange={(e) => onChange(e.target.value as T)}
        value={selectedValue}
        className="list-select"
      >
        
          <option value="" hidden>
            Selecione uma opção
          </option>
        
        {renderOptions()}
      </select>
    );
  }
  
  export default ListaSelected;
  