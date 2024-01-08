import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ModalAnalise from "./modalAnalise";
import ModalDevolution from "./modaldevolution";
import { useMediaQuery } from "react-responsive";
import IconArrowBottom from "../componentsStyled/icon/Iconarrowbottom";
import IconArrowTop from "../componentsStyled/icon/Iconarrowtop";
import { SH1, SspanText } from "../componentsStyled/Text";
import { colors } from "@mui/material";
import IconAnalise from "../componentsStyled/icon/Iconanalise";
import IconCopy from "../componentsStyled/icon/Iconcopy";
import IconLdn from "../componentsStyled/icon/Iconldn";
import ModalEnvio from "./modalEnvio";
import ModalEnvioPendente from "./modalEnvioPendente";
import ModalConcluido from "./modalconcluido";
import ModalRealizado from "./modalrealizado";
import ModalTimeout from "./modaltimeout";

interface DetailsDevolutionProps {
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
  obs: string;
  variant: string | null;
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
  method_shipment: string;
  dateCreatedReturn: string;
  customer: {
    fullname?: string;
    fone: string;
    cellphone: string;
    cep: string;
    state: string;
    city: string;
    neigh_borhood: string;
    street: string;
    number: string;
    complement: string;
  };
  products: Product[];
  history: HistoryItem[];
  status: Status;
  coupon: string;
  ldn: LDN;
}

const DetailsDevolution: React.FC<DetailsDevolutionProps> = ({ className, devolutionId }) => {
  
  const [data, setData] = useState<DataFollow | null>(null);
  const [modalType, setModalType] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isContentOpen, setIsContentOpen] = useState(!isMobile);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const[modalIsOpen, setOpenmodal]= useState(false)

  const openModal =() =>{ 
    setOpenmodal(true)
  }


  const settings = {
    dots:true,
    arrow:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
        },
      },
    ],
  };

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
          } catch (error) {
            if (error.response && error.response.status === 401) {
              openModal();
            } else {
              // Handle other errors if needed
            }
          }
        }
      }
    };
  
    fetchData();
  }, [devolutionId]);
  

  const handleButtonClick = () => {
    if (data) {
      const devolution = data;

      if (devolution.status && devolution.status.title) {
        if (devolution.status.title === "Em Análise") {
          setModalType("analise");
        } else if (devolution.status.title === "Negada") {
          setModalType("negada");
        } else if (devolution.status.title === "Envio Pendente") {
          setModalType("envio");
        } else if (devolution.status.title === "Solicitação Realizada") {
          setModalType("realizada");
        }
        else if (devolution.status.title === "Devolução Finalizada") {
          setModalType("concluido");
        } else if (devolution.status.title === "Reembolso Em Progresso") {
          setModalType("progresso");
        }
      }
    }
  };

  const closeModal = () => {
    setModalType("");
  };
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCoupon = () => {
    if (data && data.coupon) {
      navigator.clipboard.writeText(data.coupon)
        .then(() => {
          setIsCopied(true);

          
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((err) => {
        
          console.error("Failed to copy coupon code", err);
        });
    }
  };

  return (
    <>
{data && (
        <Box typeBox="datafollow" className="col-md-12 mt-4">
          <h1 onClick={() => isMobile && setIsContentOpen(!isContentOpen)}>
            Sua Solicitação {isMobile && (isContentOpen ? <IconArrowTop width={14} /> : <IconArrowBottom width={14} />)}
          </h1>
          {(isMobile && isContentOpen) || !isMobile ? (
            <>
              <Slider {...settings} key={currentProductIndex} className="slide slide_devolution">
                {Array.isArray(data.products) &&
                  data.products.map((product, productIndex) => (
                    <div key={productIndex}>
                      <h1 style={{textAlign:"start", fontSize:"17px", margin:"8px 0px 16px 0px", fontWeight:"500"}}>Solicitação #{data.order_id}</h1>
                      <div className="d-flex justify-content-between flex-column flex-md-row">
                        <div className="content-img">
                          <img src={product.image ?? undefined} alt={`Product Image ${productIndex + 1}`} />
                          <Button typeButton="followdevolution" onClick={handleButtonClick} className= {`${data.status.title === 'Negada' ? 'red' : ''}`}>
                            {data.status.title}
                          </Button>
                        </div>
                        <div className="content-product_describe">
                          <h3>{product.name || "-"}</h3>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column content">
                              <label>Tamanho</label>
                              <p>{product.variant || "-"}</p>
                            </div>
                            <div className="d-flex flex-column content">
                              <label>Preço</label>
                              <p>R${parseFloat(product.price).toFixed(2)}</p>
                            </div>
                            <div className="d-flex flex-column">
                              <label>Quantidade</label>
                              <p>{product.quant || "-"}</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between" >
                            <div className="d-flex flex-column " style={{width:"35%"}}>
                              <label>Motivo da Devolução</label>
                              <p>{product.reasonMain}</p>
                            </div>
                            <div className="d-flex flex-column " style={{width:"30%"}}>
                              <label>Sub-Motivo</label>
                              <p>{product.reasonSub}</p>
                            </div>
                            <div className="d-flex flex-column content" style={{width:"30%"}}>
                              <label>Observação</label>
                              <p>{product.obs || "-"}</p>
                            </div>
                          </div>
                          <SspanText fontWeight={400} fontSize="14px" color="#474747" padding="0px 0px 16px 0px">
                            Solicitação
                          </SspanText>
                          <div className="d-flex justify-content-between mt-2 ">
                            <div className="d-flex flex-column content">
                              <label>Tipo de Reembolso</label>
                              <p>{product.refundType || "-"}</p>
                            </div>
                            <div className="d-flex flex-column content">
                              <label>Forma de Envio</label>
                              <p>{data.method_shipment || "-"}</p>
                            </div>
                          </div>
                            {data.status.title == "Negada" && data.ldn.url && <div className="mb-5">
                            <a href={data.ldn.url} target="_blank" style={{color:"#192c53", display:"flex", justifyContent:"center", alignItems:"center", textDecoration:"none"}}>
                          <Button typeButton="followdevolution" margin="0px auto">
                            
                              <IconLdn width={24}></IconLdn>
                            Baixar Laudo de Reprova
                          </Button>
                          </a>
                          </div>} 
                          {data.status.title == "Solicitação Finalizada" &&  product.refundType =='Cupom' && <div className="mt-3 mb-3 d-flex flex-column align-items-center">
                            <p style={{fontSize:"12px", color:"#000", margin:"0px"}}>Pegue aqui seu Cupom de Vale Compras:</p>
                            <a className="d-flex justify-content-center align-items-center" style={{textDecoration:"none", cursor:"pointer"}} onClick={handleCopyCoupon}>
                            <p style={{fontSize:"16px", color:"#192c53", margin:"0px 8px"}}>{data.coupon}</p>
                            <IconCopy width={20} onClick={handleCopyCoupon}></IconCopy>
                            </a>
                            {isCopied && <span style={{ fontSize: "12px", color: "green" }}>Cupom copiado!</span>}
                          </div>} 
                        </div> 
                      </div>
                    </div>
                  ))}
              </Slider>
              
            </>
          ) : null}
          {modalType === "analise" && <ModalAnalise isOpen={true} onRequestClose={closeModal} />}
          {modalType === "negada" && <ModalDevolution isOpen={true} onRequestClose={closeModal} />}
          {modalType === "envio" && <ModalEnvioPendente isOpen={true} onRequestClose={closeModal} />}
          {modalType === "realizada" && <ModalRealizado isOpen={true} onRequestClose={closeModal} />}
          {modalType === "progresso" && <ModalEnvio isOpen={true} onRequestClose={closeModal} />}
          {modalType === "concluido" && <ModalConcluido isOpen={true} onRequestClose={closeModal} />}
        </Box>
      )}
      <ModalTimeout
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    ></ModalTimeout>
    </>
  );
};

export default DetailsDevolution;
