import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CliqueRetire from "../../components/cliqueretire";
import Correios from "../../components/correios";
import Button from "../../componentsStyled/Button";
import ModalAceite from "../../components/modalaceite";
import { Box } from "../../componentsStyled/Box";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import Header from "../../components/header";
import Menu from "../../components/menu";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";
import { Produto } from "../../components/Types";
import { useDataContext } from "../../context/DataContext";
import DevBottom from "../../componentsStyled/icon/devbottom";
import DevTop from "../../componentsStyled/icon/devtop";

interface ShippingProps {
  produtos?: Produto[];
}

const Shipping: React.FC<ShippingProps> = ({}) => {
  const location = useLocation();
  const [cliqueRetireSelected, setCliqueRetireSelected] = useState(false);
  const [correiosSelected, setCorreiosSelected] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dadosFinais, setDadosFinais] = useState(location.state || {});
  const [novosDadosSelecionados, setNovosDadosSelecionados] = useState({}); 
  const [allowed_clique_retire, setAllowed_clique_retire]= useState(dadosFinais[0].allowed_clique_retire);
  const { data } = useDataContext();

  const navigate = useNavigate();

  const handleCliqueRetireSelect = () => {
    setCliqueRetireSelected(true);
    setCorreiosSelected(false);
  };

  const handleCorreiosSelect = () => {
    setCorreiosSelected(true);
    setCliqueRetireSelected(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    setDadosFinais(location.state || {});
  }, [location.state]);

  const cliqueRetireComponent = dadosFinais[0].allowed_clique_retire ? (
    <div className="item d-flex justify-content-center">
  <CliqueRetire
    onSelect={handleCliqueRetireSelect}
    selected={cliqueRetireSelected}
  />
    </div>
  ) : null
  ;
  const envios = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 478,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleConfirmar = () => {
    const novosDadosSelecionados = {
      ...dadosFinais,
      Shipping: cliqueRetireSelected ? "Clique Retire" : correiosSelected ? "Correios" : "",
      
    };
      setNovosDadosSelecionados(novosDadosSelecionados);  
    openModal();
  };

  const handleBack = () => {
      if(dadosFinais[0].selectedProduct.tipoReembolso){
        navigate("/data",{ state: { pedido: dadosFinais || [] } })
      }else{
        navigate("/order", { state: { pedido: dadosFinais || [] } });
      }
  };
  console.log("cade", dadosFinais);
  console.log('clique retire', allowed_clique_retire)
  return (
    <>
      <Header></Header>
      <Menu typeOption="active"></Menu>
      <div className="container c-container-options d-flex options flex-column flex-md-row">
        <Button typeButton="voltar" margin="0px" onClick={handleBack}>
          <IconBack width={20}></IconBack>
          Voltar
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
            <Box typeBox="active-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                2
              </SspanText>
            </Box>
            <SspanText typeSpan="active">Reembolso</SspanText>
          </Box>
          <div className="line-options"></div>
          <Box
            typeBox="active"
            className="d-flex align-items-center justify-content-center flex-md-row flex-column"
          >
            <Box typeBox="active-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                3
              </SspanText>
            </Box>
            <SspanText typeSpan="active">Envio do Produto</SspanText>
          </Box>
        </div>
      </div>
      <section className="c-shipping position-relative">
      <DevTop className="position-absolute arrow-top"></DevTop>
        <DevBottom className="position-absolute arrow-bottom"></DevBottom>
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona? Acesse nossa&nbsp;
            <a href="https://www.futfanatics.com.br/portal-de-ajuda" target="_blank">Central de ajuda</a>
          </div>
          <IconHelp width={30} />
        </Box>
        <div className="container">
          <SH1>FORMA DE ENVIO</SH1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Slider {...envios} className="slide-shipping">
                {cliqueRetireComponent}
                <div className="item d-flex justify-content-center">
                  <Correios
                    onSelect={handleCorreiosSelect}
                    selected={correiosSelected}
                  ></Correios>
                </div>
              </Slider>
            </div>
          </div>
          <button
            className="button-fut"
            onClick={handleConfirmar}
            disabled={!cliqueRetireSelected && !correiosSelected}
          >
            Confirmar
          </button>
          <ModalAceite
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            novosDadosSelecionados={novosDadosSelecionados}
          ></ModalAceite>
        </div>
      </section>
        <Footer></Footer>
    </>
  );
};

export default Shipping;
