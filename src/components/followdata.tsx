import React, { useState, useEffect } from "react";
import { Box } from "../componentsStyled/Box";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import IconArrowTop from "../componentsStyled/icon/Iconarrowtop";
import IconArrowBottom from "../componentsStyled/icon/Iconarrowbottom";

interface FollowDataProps {
  className?: string;
  devolutionId?: string;
}

interface Product {
  quant?: number;
  price: string;
  image?: string;
  name?: string;
  refundType: string;
  reasonSub: string;
  reasonMain: string;
  obs?: string;
  variant: string;
}

interface HistoryItem {
  title: string;
  date: string;
  fileIcon: string;
  status: string;
}

interface Status {
  title: string;
  status: string;
  msg: string;
  color: string;
}

interface LDN {
  status: boolean;
  url: string;
}

export interface DataFollow {
  id: number;
  order_id: number;
  method_shipment: string | null;
  dateCreatedReturn: string;
  customer: {
    fullname: string;
    fone: string;
    cellphone: string;
    cep: string;
    state: string;
    city: string;
    neigh_borhood: string;
    street: string;
    number: string;
    complement?: string;
  };
  products: Product[];
  history: HistoryItem[];
  status: Status;
  coupon: string;
  ldn: LDN;
}

const FollowData: React.FC<FollowDataProps> = ({ className, devolutionId }) => {
  
  const [data, setData] = useState<DataFollow | null>(null);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (devolutionId) {
      let auth = localStorage.getItem("auth");

      if (auth) {
        const authObj = JSON.parse(auth);
        const username = authObj.email;
        const password = authObj.token;
        const customerId = authObj.customerId;
        const text: string = username + ":" + password;
        const encoder: TextEncoder = new TextEncoder();
        const data: Uint8Array = encoder.encode(text);

        const dataArray: number[] = Array.from(data);

        const binaryString: string = String.fromCharCode.apply(null, dataArray);
        const basicAuth: string = btoa(binaryString);

        axios
          .get(
            `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/${devolutionId}`,
            {
              timeout: 10000,
              headers: {
                Authorization: "Basic " + basicAuth,
              },
            }
          )
          .then(function (response) {
            setData(response.data);

          })
          .catch(function (error) {

          });
      }
    }
  }, [devolutionId]);

  return (
    <>
      {data && (
        <Box typeBox="datafollow" className="col-md-4 position-relative">
          <h1 onClick={() => isMobile && setIsContentOpen(!isContentOpen)}>
            Seus Dados {isMobile && (isContentOpen ? <IconArrowTop width={14}/> : <IconArrowBottom width={14}/>)}
          </h1>
          {(isMobile && isContentOpen) || !isMobile ? (
            <>
              <h2>Dados Pessoais</h2>
              <div className="d-flex flex-column">
                <label>Nome completo</label>
                <p>{data.customer.fullname}</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column content">
                  <label>Telefone</label>
                  <p>{data.customer.fone || "-"}</p>
                </div>
                <div className="d-flex flex-column content">
                  <label>Celular</label>
                  <p>{data.customer.cellphone}</p>
                </div>
              </div>
              <h2>Endereço</h2>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column content">
                  <label>CEP</label>
                  <p>{data.customer.cep}</p>
                </div>
                <div className="d-flex flex-column content">
                  <label>Estado</label>
                  <p>{data.customer.state}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column content">
                  <label>Cidade</label>
                  <p>{data.customer.city}</p>
                </div>
                <div className="d-flex flex-column content">
                  <label>Bairro</label>
                  <p>{data.customer.neigh_borhood || "-"}</p>
                </div>
              </div>
              <div className="d-flex flex-column">
                <label>Endereço</label>
                <p>{data.customer.street}</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column content">
                  <label>Número</label>
                  <p>{data.customer.number}</p>
                </div>
                <div className="d-flex flex-column content">
                  <label>Complemento</label>
                  <p>{data.customer.complement || "-"}</p>
                </div>
              </div>
            </>
          ) : null}
        </Box>
      )}
    </>
  );
};

export default FollowData;
