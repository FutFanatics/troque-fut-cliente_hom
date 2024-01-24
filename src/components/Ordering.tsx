

interface OrderingProps {
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const Ordering: React.FC<OrderingProps> = ({ className }) => {
  
    return (
        <div className="c-lista_suspensa position-relative mt-3"style={{width:'120px', height:"45px"}}>
        <select className="lista-select w-100" style={{height:"45px", borderRadius:"30px", margin:"0px"}}>
            <option value='' hidden >Ordernar</option> 
            <option value="Mais Antigo">Mais Antigo</option>
            <option value="Mais Novo">Mais Novo</option>    
            <option value="Concluídos">Concluídos</option>
            <option value="Pendentes">Pendentes</option>    
        </select>
        <div className="custom-select-icon" style={{fontSize:"14px", top:"25%"}}>&#9660;</div>
        </div>
    );
  };
  export default Ordering;
  