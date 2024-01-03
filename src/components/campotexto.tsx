interface CampoTextoProps {
    className?: string;
    label?: string;
    placeholder?: string;
    valor?: string;
    aoAlterado?: (valor: string) => void; 
    obrigatorio?: boolean;
  }
  
const CampoTexto : React.FC<CampoTextoProps> = ({ className, label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return(
        <div className="d-flex flex-column">
            <label className="data-label">{label}</label>
            <input
                value={valor}
                onChange={(evento) => aoAlterado && aoAlterado(evento.target.value)} 
                required={obrigatorio}
                placeholder={placeholder} 
                className="data-input"
            />
        </div>
    )

}
export default CampoTexto;