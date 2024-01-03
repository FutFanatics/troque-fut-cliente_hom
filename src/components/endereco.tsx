import React, { useState } from "react";
import CampoTexto from "./campotexto";

interface FormularioPessoalProps {
  className?: string;
  children?: React.ReactNode;
}

const FormularioPessoal: React.FC<FormularioPessoalProps> = ({ className }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(""); 
  const [celular, setCelular] = useState(""); 
  const [email, setEmail] = useState(""); 

  const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    
  };

  return (
    <div className="forms">
      <form onSubmit={aoSubmeter} className="row justify-content-center">
        <CampoTexto
            label="Nome Completo"
            obrigatorio={true}
            placeholder="Seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
            
        />

        <CampoTexto
            label="Telefone"
            obrigatorio={true} 
            placeholder="Digite seu telefone" 
            valor={telefone}
            aoAlterado={(valor) => setTelefone(valor)} 
            
        />

        <CampoTexto
        label="Celular"
          obrigatorio={true}
          placeholder="Digite seu celular" 
          valor={celular}
          aoAlterado={(valor) => setCelular(valor)} 
        />

        <CampoTexto
          obrigatorio={true}
          placeholder="Digite seu email" 
          valor={email}
          aoAlterado={(valor) => setEmail(valor)} 
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioPessoal;
