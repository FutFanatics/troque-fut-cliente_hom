// Data.tsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import { Box } from "../../componentsStyled/Box";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { SH1, STextParagraph, SspanText } from "../../componentsStyled/Text";
import IconFinance from "../../componentsStyled/icon/IconFinance";
import ValeCompras from "../../components/vale-compras";
import ValeEstorno from "../../components/ValeEstorno";
import Footer from "../../components/footer";
import Button from "../../componentsStyled/Button";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";
import BankData from "../../components/BankData";
import { color } from "@mui/system";
import DevTop from "../../componentsStyled/icon/devtop";
import DevBottom from "../../componentsStyled/icon/devbottom";

interface DataProps {
  onDataUpdate?: (data: any) => void;
}

const Data: React.FC<DataProps> = ({ onDataUpdate }) => {
  const location = useLocation();
  const [dadosSelecionadosAtualizados, setDadosSelecionadosAtualizados] =
  useState(location.state?.pedido || location.state || {});
  const [tipoReembolso, setTipoReembolso] = useState<string>(
    localStorage.getItem("tipoReembolso") || ""
  );
  const [todosCamposPreenchidosData, setTodosCamposPreenchidosData] =
    useState<boolean>(false);
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isInformationConfirmed, setIsInformationConfirmed] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const { data, updateData } = useDataContext();
  const [tipoPix, setTipoPix] = useState<string | null>(null);
  const [chavePix, setChavePix] = useState("");
  const [updatedData, setUpdatedData] = useState<any>({});
  const [bank, setBank] = useState<string>("");
  const [cpfcnpj, setCpfcnpj] = useState<string>("");
  const [accont, setAccont] = useState<string>("");
  const [agency, setAgency] = useState<string>("");
  const [typebank, setTypeBank] = useState<string>("");
  const [areAllCheckboxesChecked, setAreAllCheckboxesChecked] =
    useState<boolean>(false);
    const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});

  
  const updateTipoPix = (tipoPixValue: string | null) => {
    setTipoPix(tipoPixValue);
  };

  const updateChavePix = (chavePixValue: string) => {
    setChavePix(chavePixValue);
  };

  const updateBank = (bankValue: string) => {
    setBank(bankValue);
  };

  const updateCpfcnpj = (cpfcnpjValue: string) => {
    setCpfcnpj(cpfcnpjValue);
  };

  const updateAccont = (accontValue: string) => {
    setAccont(accontValue);
  };

  const updateAgency = (agencyValue: string) => {
    setAgency(agencyValue);
  };

  const updateTypeBank = (typebankValue: string) => {
    setTypeBank(typebankValue);
  };
  
  
  //console.log("cade mo", dadosSelecionadosAtualizados)
  const updateCheckboxState = (key: string, value: boolean) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  
  const handleCheckboxChange = (tipoReembolso: string) => (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //console.log(`Checkbox clicked for tipoReembolso: ${tipoReembolso}, Checked: ${event.target.checked}`);
  
    updateCheckboxState(tipoReembolso, event.target.checked);
  
    if (Array.isArray(dadosSelecionadosAtualizados)) {
      const updatedData = dadosSelecionadosAtualizados.map((produto: any, idx: number) => {
        if (produto.selectedProduct.tipoReembolso === tipoReembolso) {
          return {
            ...produto,
            checkbox: event.target.checked,
          };
        }
        return produto;
      });
  
      setDadosSelecionadosAtualizados(updatedData);
    }
  };
  
  useEffect(() => {
    //console.log('Checkbox States:', checkboxStates);
  
  const allCheckboxesChecked = Array.isArray(dadosSelecionadosAtualizados) &&
    dadosSelecionadosAtualizados.every((produto: any, index: number) => checkboxStates[`${produto.selectedProduct.tipoReembolso}`]);

  setAreAllCheckboxesChecked(allCheckboxesChecked);
}, [checkboxStates, dadosSelecionadosAtualizados]);
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const renderReembolsoComponent = () => {
    const tiposReembolso = dadosSelecionadosAtualizados.map(
      (produto: any) => produto.selectedProduct.tipoReembolso
    );
  
    if (tiposReembolso.every((tipo, index, array) => tipo === array[0])) {
      const firstProduct = dadosSelecionadosAtualizados[0];
      const { id: productId, variant_value: variantValue } = firstProduct;
  
      return renderReembolsoByType(tiposReembolso[0], productId, variantValue);
    }
  
    return null;
  };
//console.log('dados', )
  const renderReembolsoByType = (tipoReembolso: string, productId: number, variantValue: string, index?:number) => {
    const reembolsoComponents = {
      Cupom: <ValeCompras onCheckboxChange={handleCheckboxChange(tipoReembolso)(index)} />,
      Estorno: (
        <ValeEstorno
          onCheckboxChange={handleCheckboxChange(tipoReembolso)(index)}
          produtos={dadosSelecionadosAtualizados}
          onConfirm={() => setIsInformationConfirmed(true)}
          tipoPix={tipoPix}
          chavePix={chavePix}
          bank={bank}
          cpfcnpj={cpfcnpj}
          accont={accont}
          agency={agency}
          updateTipoPix={updateTipoPix}
          updateChavePix={updateChavePix}
          updateBank={updateBank}
          updateCpfcnpj={updateCpfcnpj}
          updateAccont={updateAccont}
          updateAgency={updateAgency}
          updateTypeBank={updateTypeBank}
        />
      ),
    };

    return reembolsoComponents[tipoReembolso] || null;
  };

  const isSameReembolsoType =
    Array.isArray(dadosSelecionadosAtualizados) &&
    dadosSelecionadosAtualizados.length > 0 &&
    dadosSelecionadosAtualizados.every(
      (produto: any, index: number, array: any[]) =>
        produto.selectedProduct.tipoReembolso === array[0].selectedProduct.tipoReembolso
    );

  const renderDifferentReembolsoComponent = (
    tipoReembolso: string,
    productId: number,
    variantValue: string,
  ) => {
    return renderReembolsoByType( tipoReembolso, productId, variantValue);
  };

  const handleConfirmar = () => {
    let areAllCheckboxesChecked = Object.values(checkboxStates).every((isChecked) => isChecked);

    //console.log("Are all checkboxes checked?", areAllCheckboxesChecked);

    dadosSelecionadosAtualizados.forEach((produto: any, index: number) => {
      if (produto.selectedProduct.tipoReembolso.toLowerCase() === "estorno" && !areAllCheckboxesChecked) {
        areAllCheckboxesChecked = false;
      }
    });
    if (areAllCheckboxesChecked) {
      const dadosFinais = dadosSelecionadosAtualizados.map((produto: any, index: number) => {
        if (produto.selectedProduct?.tipoReembolso?.toLowerCase() === "estorno") {
          return {
            ...produto,
            BankReembolso: {
              pixData: {
                tipoPix: tipoPix,
                chavePix: chavePix,
              },
              bankData: {
                bank: bank,
                cpfcnpj: cpfcnpj,
                agency: agency,
                accont: accont,
                typebank: typebank,
              },
            },
          };
        }
        return produto;
      });
    
      setUpdatedData([...dadosFinais]); 
      if (onDataUpdate) {
        onDataUpdate(dadosSelecionadosAtualizados);
      }
    
      navigate("/shipping", { state: dadosFinais || dadosSelecionadosAtualizados });
    }
  };

  //console.log("Checking checkboxes:", checkboxStates);
  //console.log("Final result - Are all checkboxes checked?", areAllCheckboxesChecked);

  const handleBack = () => {
    navigate("/order");
  };

  return (
    <>
      <Header />
      <Menu typeOption="active" />
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
            <Box typeBox="inative-number">
              <SspanText color="#fff" fontSize="20px" fontWeight={600}>
                3
              </SspanText>
            </Box>
            <SspanText typeSpan="inative">Envio do Produto</SspanText>
          </Box>
        </div>
      </div>
      <section className="c-data position-relative">
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
          <SH1 textTransform="uppercase" fontSize="20px">
            Informações de reembolso
          </SH1>
          <div className="content d-md-flex flex-column align-items-center">
            {isSameReembolsoType ? (
              <Box typeBox="estorno" className="d-flex flex-column col-md-10">
                <IconFinance width={64} className="mb-4"></IconFinance>
                {renderReembolsoComponent()}
              </Box>
            ) : (
              <Slider {...sliderSettings} className="col-md-10 c-slide">
                {Array.isArray(dadosSelecionadosAtualizados) && dadosSelecionadosAtualizados.map(
  (produto: any, index: number) => (
    <React.Fragment key={produto.id}>
      <Box typeBox="estorno" className="d-flex flex-column">
        <IconFinance width={64}></IconFinance>
        <div className="container-reembolso d-flex justify-content-center mt-4 flex-column flex-md-row">
          <div className="c-box-product d-flex flex-column justify-content-center align-items-center">
            <img
              src={produto.img}
              className="picture"
              alt={`Product ${index}`}
            />
            <h1>{produto.name}</h1>
            <span>Variação: {produto.variant_value}</span>
          </div>
          {renderDifferentReembolsoComponent(
            produto.selectedProduct.tipoReembolso,
            produto.id,
            produto.variant_value,
          )}
        </div>
      </Box>
    </React.Fragment>
  )
)}

              </Slider>
            )}
              {!areAllCheckboxesChecked && (
                <p style={{ color: "#000", fontSize: "12px", marginTop: "16px", marginBottom:"-16px", textAlign:"center" }}>É necessário preencher todos os campos para prosseguir.</p>
              )}
            <button
              onClick={handleConfirmar}
              disabled={!areAllCheckboxesChecked}
              className={`button-fut ${!areAllCheckboxesChecked ? 'disabled' : ''}`}
              >
              Avançar
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Data;
