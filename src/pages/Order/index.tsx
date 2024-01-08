import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import Header from "../../components/header";
import ListaProdutos from "../../components/listaprodutos";
import ListaSuspensa from "../../components/listasuspensa";
import Menu from "../../components/menu";
import { Box } from "../../componentsStyled/Box";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";
import ModalNotProduct from "../../components/modalnotproduct";
import DevBottom from "../../componentsStyled/icon/devbottom";
import DevTop from "../../componentsStyled/icon/devtop";
import ModalTimeout from "../../components/modaltimeout";

interface Pedido {
  id: string;
  date: string;
}

export default function Order() {
  const [data, setData] = useState<Pedido[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const[modalIsOpen, setOpenmodal]= useState(false)

  const openModal =() =>{ 
    setOpenmodal(true)
  }
  const closeModal =() =>{
    setOpenmodal(false)
  }


  useEffect(() => {
    let auth = localStorage.getItem("auth");

    if (auth) {
      const authObj = JSON.parse(auth);

      const username = authObj.email;
      const password = authObj.token;
      const text: string = username + ':' + password;
      const encoder: TextEncoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(text);

      const dataArray: number[] = Array.from(data);
      const binaryString: string = String.fromCharCode.apply(null, dataArray);
      const basicAuth: string = btoa(binaryString);

      axios
        .get(
          `https://api.troquefuthomologacao.futfanatics.com.br/api/order/list/` +
            authObj.customerId,
          {
            timeout: 10000,
            headers: {
              Authorization: "Basic " + basicAuth,
            },
          }
        )
        .then(function (response) {
          setData(response.data);


          if (response.data.length > 0) {

          } else {

            setTimeout(() => {
              setShowModal(true);
            });
          }
        })
        .catch(function (error) {
          if (error.response && error.response.status === 401) {
            openModal()
          } else {            }
        });
    }
  }, []);

  const carregarItensDaListaDeProdutos = (orderId: string) => {
  
  };

  const pedidoOptions = Array.isArray(data)
    ? data.map((pedido) => ({
        value: pedido.id,
        label: pedido.id,
      }))
    : [];

  const handleOptionChange = (selectedValue: string) => {
    setSelectedId(selectedValue);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Header></Header>
      <Menu typeOption="active"></Menu>
      <div className="container c-container-options d-flex options flex-column flex-md-row">
        <Button typeButton="voltar" margin="0px" onClick={handleBack}>
          <IconBack width={20}></IconBack>
          Sair
        </Button>
        <div className="box-options d-flex justify-content-center align-items-center">
          <Box
            typeBox="active"
            className="d-flex flex-md-row flex-column align-items-center justify-content-center"
          >
            <Box typeBox="active-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                1
              </SspanText>
            </Box>
            <SspanText typeSpan="active">Pedido</SspanText>
          </Box>
          <div className="line-options"></div>
          <Box
            typeBox="active"
            className="d-flex align-items-center justify-content-center flex-md-row flex-column"
          >
            <Box typeBox="inative-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                2
              </SspanText>
            </Box>
            <SspanText typeSpan="inative">Reembolso</SspanText>
          </Box>
          <div className="line-options"></div>
          <Box
            typeBox="active"
            className="d-flex align-items-center justify-content-center flex-md-row flex-column"
          >
            <Box typeBox="inative-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                3
              </SspanText>
            </Box>
            <SspanText typeSpan="inative">Envio do Produto</SspanText>
          </Box>
        </div>
      </div>
      <section className="c-order position-relative">
      <DevTop className="position-absolute arrow-top"></DevTop>
        <DevBottom className="position-absolute arrow-bottom"></DevBottom>
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa &nbsp;<a href="https://www.futfanatics.com.br/portal-de-ajuda" target="_blank">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
        <div className="container">
          <SH1
            textTransform="uppercase"
            fontSize="20px"
            margin="16px 0px 0px 0px"
          >
            Selecione O pedido
          </SH1>
          {data.length > 0 ? (
            <ListaSuspensa
              label="Selecione uma opção"
              valor={selectedId}
              items={pedidoOptions}
              obrigatorio={true}
              onChange={handleOptionChange}
              className="c-lista-suspensa"
            ></ListaSuspensa>
          ) : (
            <ModalNotProduct
              isOpen={showModal}
              onRequestClose={() => {}}
            ></ModalNotProduct>  
          )}

          {data.length > 0 && (
            <ListaProdutos selectedId={selectedId}></ListaProdutos>
          )}
        </div>
        
      </section>
      <Footer></Footer>
      <ModalTimeout
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ></ModalTimeout>
    </>
  );
}
