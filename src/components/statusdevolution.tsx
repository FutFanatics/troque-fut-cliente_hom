import React, { useEffect, useState } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import IconSolicitacao from "../componentsStyled/icon/Iconsolicitacao";
import IconEnvio from "../componentsStyled/icon/Iconenvio";
import IconAnaliseDevolucao from "../componentsStyled/icon/Iconanalisedev";
import IconAcompanhe from "../componentsStyled/icon/Iconacompanhe";
import IconReembolso from "../componentsStyled/icon/Iconreembolso";
import IconCheck from "../componentsStyled/icon/Iconcheck";
import IconDenied from "../componentsStyled/icon/Icondenied";
import axios from "axios";
import useSessionTimeoutValidation from '../components/useSessionTimeoutValidation';
interface StatusDevolutionProps {
  className?: string;
  devolutionId?: string;
}

const StatusDevolution: React.FC<StatusDevolutionProps> = ({ className, devolutionId }) => {
  const [data, setData] = useState<DataFollow | null>(null);
  const [lineOpacity, setLineOpacity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
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

          try {
            const response = await axios.get(
              `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/${devolutionId}`,
              {
                timeout: 10000,
                headers: {
                  Authorization: "Basic " + basicAuth,
                },
              }
            );

            setData(response.data);
            //console.log(response.data, "Dados do pedido recebidos com sucesso do status");
          } catch (error) {
            //console.log(error, "Erro ao obter dados do pedido");
          }
        }
      }
    };

    fetchData();
  }, [devolutionId]);

    useEffect(() => {
    if (data) {
      data.history.forEach((step, index) => {
        if (index < data.history.length - 1 && data.history[index + 1].status === " ") {
          setLineOpacity(0.5);
        } else {
          setLineOpacity(1);
        }
      });
    }
  }, [data]);
  return (
    <>
      {data && (
        <Box
          key={data.id}
          typeBox="datafollow"
          className={`col-md-12 status`}
        >
          <div className="status-icons d-flex align-items-center">
            {data.history.map((step, index) => {
              const IconComponent = getIconComponent(step.title);
              const iconColor = getIconColor(step.status);
              return (<>
              
                <div
                  className="d-flex flex-column align-items-center container-icon"
                  key={index}
                >
                  <div
                    className="status-icon"
                    style={{
                      backgroundColor: getStatusColor(step.status),
                      border: `1px solid ${getBorderColor(step.status)}`,
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ fill: iconColor }}
                    >
                      <IconComponent />
                    </div>
                  </div>
                  <span className="name-status">{step.title}</span>
                  <span className="name-date">{step.date || ""}</span>
                </div>
                <div className="line" style={{ opacity: lineOpacity }}></div>
                  </>
              );
            })}
          </div>
        </Box>
      )}
    </>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "approved":
      return "#192c53";
    case "denied":
      return "red";
    default:
      return "transparent";
  }
};

const getBorderColor = (status: string): string => {
  switch (status) {
    case "approved":
      return "#192c53";
    case "denied":
      return "red";
    case "pending":
      return "#192c53";
    default:
      return "#00000080";
  }
};

const getIconColor = (status: string): string => {
  switch (status) {
    case "approved":
      return "white";
    case "denied":
      return "white";
      case "pending":
      return "#192c53";
    default:
      return "#1C1B1F80";
  }
};

const getIconComponent = (title: string): React.FC => {
  switch (title) {
    case "Solicitação":
      return IconSolicitacao;
    case "Envio":
      return IconEnvio;
    case "Análise do Produto":
      return IconAnaliseDevolucao;
    case "Solicitação Negada":
      return IconDenied;
    case "Reembolso":
      return IconReembolso;
    case "Devolução Finalizada":
      return IconCheck;
    default:
      return IconAcompanhe;
  }
};

export default StatusDevolution;
