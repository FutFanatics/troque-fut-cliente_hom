// BankData.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaSelected from "./listaselected";
import { Box } from "../componentsStyled/Box";

interface Bank {
  id: number;
  name: string;
}

interface BankType {
  id: number;
  name: string;
}

interface BankDataProps {
  onDataUpdate?: (data: any) => void;
  updateData?: (data: any) => void;
}

const BankData: React.FC<BankDataProps> = ({ onDataUpdate }) => {
  const [data, setData] = useState<{ banks: Bank[]; banks_types: BankType[] }>({
    banks: [],
    banks_types: [],
  });
  const [bank, setBank] = useState<string>("");
  const [cpfValue, setCpfValue] = useState<string>("");

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "https://api.troque.futfanatics.com.br/api/banks",
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

  const updateData = () => {
    if (onDataUpdate) {
      onDataUpdate({
        bank,
        
      });
    }
  };

  return (
    <>
      <div className="d-flex flex-column mt-1">
        <div className="row mt-3">
          <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
            <label>Banco</label>
            <ListaSelected
              options={data.banks.map((bank) => bank.name)}
              onChange={(selectedValue) => setBank(selectedValue)}
              selectedValue={bank}
            />
          </Box>
          <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
            <label>CPF ou CNPJ</label>
            <input
              type="text"
              placeholder="Ex: 000.000.000-00"
              value={cpfValue}
              onChange={(e) => setCpfValue(e.target.value)}
            />
          </Box>
        </div>
        <div className="row">
          <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
            <label>Agência</label>
            <input type="text" placeholder="000-00" />
          </Box>
          <Box typeBox="login" margin="5px 0px 16px 0px" className="col-md-6">
            <label>Conta</label>
            <input type="text" placeholder="00.000-00" />
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
                <input type="radio" name={`${bankType.name}`}/>
                <label>{bankType.name}</label>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </>
  );
};

export default BankData;
