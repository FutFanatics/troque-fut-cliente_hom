import React, { useState, useEffect } from "react";
import Pix from "./pix";
import BankData from "./BankData";
import Button from "../componentsStyled/Button";
import { STextParagraph } from "../componentsStyled/Text";
import { Produto } from "./Types";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "../componentsStyled/Box";
import axios from "axios";
import ListaSelected from "./listaselected";
import IconFinance from "../componentsStyled/icon/IconFinance";
import { useMask } from '@react-input/mask';
import { InputMask } from '@react-input/mask';


interface ValeEstornoProps {
  updateData?: (data: Produto[]) => void;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  produtos?: Produto[];
  onConfirm?: () => void;
  tipoPix?: string | null;
  chavePix?: string;
  bank?: string | null;
  cpfcnpj?: string;
  accont?: string;
  agency?: string;
  typebank?: string;
  updateTipoPix: (tipoPixValue: string | null) => void;
  updateChavePix: (chavePixValue: string) => void;
  updateBank: (bankValue: string | null) => void;
  updateCpfcnpj: (cpfcnpjValue: string) => void;
  updateAccont: (accontValue: string | null) => void;
  updateAgency: (agencyValue: string) => void;
  updateTypeBank:(typebankValue: string | null) => void;
  
}

interface Bank {
  id: number;
  name: string;
}

interface BankType {
  id: number;
  name: string;
}

const ValeEstorno: React.FC<ValeEstornoProps> = ({
  updateData,
  onCheckboxChange,
  produtos,
  onConfirm,
  updateTipoPix,
  updateChavePix,
  updateBank,
  updateCpfcnpj,
  updateAccont,
  updateAgency,
  updateTypeBank,
}) => {
  
  const location = useLocation();
  const [dadosSelecionadosAtualizados, setDadosSelecionadosAtualizados] = useState<Produto[]>(location.state || []);
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("pix");
  const [pixData, setPixData] = useState<any>(null);
  const [bankData, setBankData] = useState<any>(null);
  const [tipoPix, setTipoPix] = useState<string | null>(null);
  const [chavePix, setChavePix] = useState("");
  const [selectedBankType, setSelectedBankType] = useState<string | null>(null);
  const [data, setData] = useState<{ banks: Bank[]; banks_types: BankType[] }>({
    banks: [],
    banks_types: [],
  });
  const [bank, setBank] = useState<string>("");
  const [cpfcnpj, setCpfcnpj] = useState<string>("");
  const [accont, setAccont] = useState<string>("");
  const[agency, setAgency] = useState<string>("")
  const[typebank, setTypeBank] = useState<string>("")
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    setTipoPix("");
    setChavePix("");
    setBank("");
    setCpfcnpj("");
    setAccont("");
    setAgency("");
    setTypeBank("");
  };


  const handleTipoPixChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPix = event.target.value;
    updateTipoPix(selectedTipoPix);
  };


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setCheckboxMarcado(checked);
    onCheckboxChange(event);
  };
  //console.log('mostra o tipo', tipoPix)

  const renderInputField = () => {
    switch (tipoPix) {
      case "Celular":
        return (
          <input
            type="text"
            placeholder="(00) 00000-0000"
            value={chavePix}
            onChange={(e) => {
              setChavePix(e.target.value);
              updateChavePix(e.target.value); 
            }}
            maxLength={14}
          />
        );
      case "CPF ou CNPJ":
        return (
          <input
            type="text"
            placeholder="Insira CPF ou CNPJ"
            value={chavePix}
            onChange={(e) => {
              setChavePix(e.target.value);
              updateChavePix(e.target.value); 
            }}
            maxLength={18}
          />
        );
      case "Chave Aleatória":
        return (
          <input
            type="text"
            placeholder="Insira a Chave Aleatória"
            value={chavePix}
            onChange={(e) => {
              setChavePix(e.target.value);
              updateChavePix(e.target.value); 
            }}
          />
        );
      case "E-mail":
        return (
          <input
            type="email"
            placeholder="Insira o endereço de e-mail"
            value={chavePix}
            onChange={(e) => {
              setChavePix(e.target.value);
              updateChavePix(e.target.value); 
            }}
          />
        );
      default:
        return (
          <input
            type="text"
            placeholder="Insira a Chave PIX"
            value={chavePix}
            onChange={(e) => {
              setChavePix(e.target.value);
              updateChavePix(e.target.value); 
            }}
          />
        );
    }
  };

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          `https://api.troque.futfanatics.com.br/api/banks`,
          {
            timeout: 10000,
            headers: {
              Authorization: "Basic " + getBasicAuth(),
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, []);

  const getBasicAuth = () => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      const authObj = JSON.parse(auth);
      const username = authObj.email;
      const password = authObj.token;
      const text: string = username + ":" + password;
      const encoder: TextEncoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(text);

      const dataArray: number[] = Array.from(data);
      const binaryString: string = String.fromCharCode.apply(null, dataArray);
      return btoa(binaryString);
    }

    return "";
  };

  

  return (
    <>
      <div className="c-estorno d-flex flex-column align-items-center ">
    
        <div className="d-flex justify-content-center">
          <Button
            typeButton="select-estorno"
            className={activeTab === "pix" ? "active" : ""}
            onClick={() => handleTabChange("pix")}
          >
            Pix
          </Button>
          <Button
            typeButton="select-estorno"
            className={activeTab === "bankData" ? "active" : ""}
            onClick={() => handleTabChange("bankData")}
          >
            Dados Bancários
          </Button>
        </div>
        {activeTab === "pix" && (
          <div className={`col-12 d-flex flex-column mt-2 w-100`}>
            <Box typeBox="login" margin="0px">
              <label>Tipo de Pix</label>
              <select className="w-100" onChange={handleTipoPixChange}>
                <option value='' hidden>Selecione o tipo</option>
                <option >Celular</option>
                <option>CPF ou CNPJ</option>
                <option>Chave Aleatória</option>
                <option>E-mail</option>
              </select>
            </Box>
            <Box typeBox="login" className="d-flex flex-column" margin="32px 0px">
              <label>Chave PIX</label>
              {renderInputField()}
            </Box>
          </div>
        )}
        {activeTab === "bankData" && (
          <div className="d-flex flex-column mt-1">
            <div className="row mt-3">
              <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
                <label>Banco</label>
                <ListaSelected
                  options={data.banks.map((bank) => bank.name)}
                  onChange={(selectedValue) => {
                     setBank(selectedValue);
                      updateBank(selectedValue);
                     }
                  }
                  selectedValue={bank}
                />
              </Box>
              <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
                <label>CPF ou CNPJ</label>
                <input
                  type="text"
                  placeholder="Ex: 000.000.000-00"
                  value={cpfcnpj}
                  onChange={(e) => {
                    setCpfcnpj(e.target.value);
                    updateCpfcnpj(e.target.value); 
                  }}
                />
              </Box>
            </div>
            <div className="row">
              <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
                <label>Agência</label>
                <input type="text" 
                placeholder="000-00" 
                value={agency}
                onChange={(e) => {
                  setAgency(e.target.value);
                  updateAgency(e.target.value); 
                }}
                />
              </Box>
              <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
                <label>Conta</label>
                <input type="text" 
                placeholder="00.000-00" 
                value={accont} 
                onChange={(e) => {
                  setAccont(e.target.value);
                  updateAccont(e.target.value); 
                }}
                />
              </Box>
            </div>
            <Box
              typeBox="login"
              className="d-flex flex-column"
              margin="16px 0px 16px 0px"
            >
              <label>Tipo de Conta</label>
              <div className="d-flex">
              {data.banks_types.map((bankType) => (
                <div key={bankType.id} className="d-flex box-radios">
                  <input type="radio" 
                  name="bankType" 
                  value={bankType.name}
                  onChange={() => updateTypeBank(bankType.name)}/>
                  <label>{bankType.name}</label>
                </div>
              ))}
            </div>
            </Box>
          </div>
        )}
        <div className="d-flex mt-3 politica justify-content-start align-items-center">
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

export default ValeEstorno;
