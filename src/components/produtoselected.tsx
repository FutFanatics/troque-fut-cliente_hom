import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import ModalCamera from "./modalfoto";
import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import OutOfDateModal from "./OutOfDateModal";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import ListaSelected from "./listaselected";
import { Produto } from "./Types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconInformative from "../componentsStyled/icon/iconinformative";
import IconInfoVale from "../componentsStyled/icon/iconinfovale";
import ModalData from "./modaldata";
import { useDataContext } from "../context/DataContext";
import ModalTimeout from "./modaltimeout";

interface ProductSelectedProps {
  className?: string;
  selectedId?:string;
  produtos?: Produto[];
  produtosSelecionados?: Produto[];
  onDataUpdate?: (data: any) => void;
  onSaveTipoReembolso?: (tipoReembolso: string) => void;
  produtoSelecionadoData?: any;
  orderId?: string;
  allowed_clique_retire?: string;
  delivery_date?: string;
  payment_method?: string;
}
interface SelectedProductType {
  tipoReembolso?: string;
  motivoDevolucao?: string;
  quantidade?: number | "";
  subDevolucao?: string;
  obsDev?: string;
}
interface SelectedProductTypeWithKey extends SelectedProductType {
  key: string;
}

const ProductSelected: React.FC<ProductSelectedProps> = ({
  produtos,
  onDataUpdate,
  onSaveTipoReembolso,
  produtoSelecionadoData,
  orderId,
  selectedId,
  payment_method,
  allowed_clique_retire,
  delivery_date,
}) => {
  const [lastProductSelected, setLastProductSelected] = useState<string>("");
  const location = useLocation();
  const { data, updateData } = useDataContext();
  const [tipoReembolso, setTipoReembolso] = useState("");
  const [subReasonOptions, setSubReasonOptions] = useState<any[]>([]);
  const [motivoDevolucao, setMotivoDevolucao] = useState("");
  const [subDevolucao, setSubDevolucao] = useState<number | string>("");
  const [quantidade, setQuantidade] = useState<number | "">("");
  const [reasons, setReasons] = useState<any[]>([]);
  const [obsDev, setObsDev] = useState<string>("");
  const [subReasons, setSubReasons] = useState<Record<string, any[]>>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fotoAdicionada, setFotoAdicionada] = useState(false);
  const [mediaRequired, setMediaRequired] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBotaoConfirmarHabilitado, setIsBotaoConfirmarHabilitado] =
    useState(false);
  const [dadosSelecionados, setDadosSelecionados] = useState(
    location.state || {}
  );
  const [motivoSelecionado, setMotivoSelecionado] = useState<string>("");
const [keySelecionada, setKeySelecionada] = useState<string>("");
  const [modalStates, setModalStates] = useState<boolean[]>(
    Array(produtos.length).fill(false)
  );
  const [produtoData, setProdutoData] = useState<Record<number, any>>({});
  const [modalData, setModalData] = useState<any>(null);
  const [updatedData, setUpdatedData] = useState<any>({});
  const [outOfDateModalIsOpen, setOutOfDateModalIsOpen] =
    useState<boolean>(false);
  const [reasonDeadlines, setReasonDeadlines] = useState<
    Record<string, string>
  >({});
  const [obsDevByProduct, setObsDevByProduct] = useState<
    Record<string, string>
  >({});
  const [isMediaRequiredErrorByProduct, setIsMediaRequiredErrorByProduct] =
  useState<Record<string, boolean>>({});
  const [isMediaRequiredError, setIsMediaRequiredError] = useState(false);
  const navigate = useNavigate();
  const isFotoAdicaoValida = fotoAdicionada || motivoDevolucao !== "";
  const[IsOpen, setOpenmodal]= useState(false)
  const [selectedReasonDaysAllowed, setSelectedReasonDaysAllowed] = useState<number | null>(null);
  const [isMotivoDevolucaoValid, setIsMotivoDevolucaoValid] = useState(true);


  const abrirModal =() =>{ 
    setOpenmodal(true)
  }
  const fecharModal =() =>{
    setOpenmodal(false)
  }
  /** Settings do Slick */
  const settings = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //localStorage.setItem("tipoReembolso", tipoReembolso);

  /** Buscar os motivos na API e validações */
  useEffect(() => {
    fetch(`https://api.troquefuthomologacao.futfanatics.com.br/api/reasons`)
      .then((response) => response.json())
      .then((data) => {
        setReasons(data);

        const deadlines = {};

        data.forEach((reason) => {
          const currentDate = new Date();
          const deadlineDate = new Date(currentDate);
          // Colocando a data de envio + os dias do motivo
          deadlineDate.setDate(currentDate.getDate() + reason.days_allowed);
          const formattedDeadlineDate = formatDate(
            delivery_date,
            reason.days_allowed
          );
          deadlines[reason.description] = formattedDeadlineDate;
        });

        setReasonDeadlines(deadlines);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 401) {
          abrirModal()
        } else {            }
      });
  }, [delivery_date]);



  // useEffect(() => {
  //   produtos.forEach((produto) => {
  //     const productIdVariantValue = `${produto.product_id}-${produto.variant_value}`;
  //     //console.log('productIdVariantValue:', productIdVariantValue);
  //     // Verifique se productIdVariantValue é válido
  //     if (productIdVariantValue) {
  //       setSubReasons((prevSubReasons) => ({
  //         ...prevSubReasons,
  //         [productIdVariantValue]: [],
  //       }));
  //     }
  //   });
  // }, [produtos]);


  /** Validação dos motivos */
  useEffect(() => {
    const selectedReason = reasons.find(
      (reason) => reason.description === motivoDevolucao
    );

    if (selectedReason && outOfDateModalIsOpen === true) {
      setMotivoDevolucao("");

    }

    if (selectedReason) {
      setSelectedReasonDaysAllowed(selectedReason.days_allowed);
      const deadlineDate = new Date(reasonDeadlines[motivoDevolucao]);
      const currentDate = new Date();
      setIsMotivoDevolucaoValid(true)

      if (currentDate > deadlineDate) {
        setMotivoDevolucao("");
        setOutOfDateModalIsOpen(true);
        setIsMotivoDevolucaoValid(false)

        return
      }

      if (selectedReason.media_required === 1) {
        setMediaRequired(true);
        setIsMediaRequiredError(!fotoAdicionada);
      } else {
        setMediaRequired(false);
        setIsMediaRequiredError(false);
      }

      let partes = lastProductSelected.split('-');
      let codProd = partes[0];
      let codVariant = partes.slice(1).join('-')

      if (selectedReason && selectedReason.subReasons) {
        const produto = produtos.filter((produto) => {
          if (produto.variant_value === codVariant) {
            if (produto.product_id === codProd) {
              return true;
            }
          }
          return false;
        });

        const productIdVariantValue = `${produto[0].product_id}-${produto[0].variant_value}`;

        if (motivoDevolucao && productIdVariantValue) {
          setSubReasons((prevSubReasons) => ({
            ...prevSubReasons,
            [productIdVariantValue]: selectedReason.subReasons,
          }));
        }
      } else {
        produtos.forEach((produto) => {
          const productIdVariantValue = `${produto.product_id}-${produto.variant_value}`;

          if (productIdVariantValue) {
            setSubReasons((prevSubReasons) => ({
              ...prevSubReasons,
              [productIdVariantValue]: [],
            }));
          }
        });
      }
    }
  }, [motivoDevolucao, produtoSelecionadoData, reasons, reasonDeadlines, outOfDateModalIsOpen, produtos]);

  /** Colocar os dados selecionados dentro do state */
  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(updatedData);
    }
  }, [updatedData, onDataUpdate, fotoAdicionada]);

  if (onSaveTipoReembolso) {
    onSaveTipoReembolso(tipoReembolso);
  }

  /** Validar se não foi enviado nenhum produto no parâmetro */
  if (!produtos || produtos.length === 0) {
    return null;
  }

  /** Validar se todos os campos obrigatórios foram preenchidos */
  const areAllFieldsFilled = () => {
    let isValid = true;
    let errorMessage = '';
  
    produtos.every((produto) => {
      const data = produtoData[produto.product_id]?.[produto.variant_value] || {};
      const selectedReason = reasons.find(
        (reason) => reason.description === data.motivoDevolucao
      );
  
      const isWithinDeadline = () => {
        if (selectedReason) {
          const deadlineDate = new Date(reasonDeadlines[data.motivoDevolucao]);
          const currentDate = new Date();
          return currentDate <= deadlineDate;
        }
        return true;
      };
  
      if (!isWithinDeadline()) {
        data.motivoDevolucao = "";
        data.subDevolucao = "";
      }
  
      let isFieldValid = false;
  
      if (produto.is_personalized === true) {
        isFieldValid = (
          data.quantidade &&
          data.subDevolucao &&
          data.obsDev !== "" &&
          data.fotoAdicionada &&
          isWithinDeadline()
        );
      } else {
        isFieldValid = (
          data.tipoReembolso &&
          data.quantidade &&
          data.motivoDevolucao &&
          data.subDevolucao &&
          data.obsDev !== "" &&
          (!selectedReason ||
            selectedReason.media_required !== 1 ||
            data.fotoAdicionada) &&
          isWithinDeadline()
        );
      }
  
      if (!isFieldValid) {
        isValid = false;
        errorMessage = "Por favor, preencha todos os campos corretamente e selecione um motivo válido.";
      }
  
      return isFieldValid; // Continue iterando apenas se o campo atual for válido
    });
  
    if (!isValid) {
      // Exibir a mensagem de erro aqui (por exemplo, com console.log)
      console.log(errorMessage);
    }
  
    return isValid;
  };
  


  const updateProdutoData = (
    productId,
    key,
    value,
    variant_value?,
    subReasonId?,
    name?,
    selectedValue?
  ) => {
    setProdutoData((prevProdutoData) => ({
      ...prevProdutoData,
      [productId]: {
        ...prevProdutoData[productId],
        [variant_value]: {
          ...prevProdutoData[productId]?.[variant_value],
          [key]: value,
        },
      },
    }));
  };
console.log('dados selecionados', data)
  /********************** ATAAAACKKK ******************** */

  /** Renderizar a foto ao selecionar a evidência */
  const handlePhotoUploadComplete = (productId, variant_value) => {
    setIsMediaRequiredErrorByProduct((prevErrors) => ({
      ...prevErrors,
      [`${productId}-${variant_value}`]: false,
    }));
    setFotoAdicionada(true);

    updateProdutoData(productId, "fotoAdicionada", true, variant_value);
  };

  /** Função para formatar a data */
  const formatDate = (baseDate, daysToAdd) => {
    const deadlineDate = new Date(baseDate);
    deadlineDate.setDate(deadlineDate.getDate() + daysToAdd);

    const year = deadlineDate.getFullYear();
    const month = String(deadlineDate.getMonth() + 1).padStart(2, "0");
    const day = String(deadlineDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day} 00:00:00`;
  };

  /** Abrir o modal da foto */
  const openModal = (productId, variantValue) => {
    setModalStates((prevModalStates) => {
      const newModalStates = [...prevModalStates];
      const index = produtos.findIndex(
        (produto) =>
          produto.product_id === productId &&
          produto.variant_value === variantValue
      );
      if (index !== -1) {
        newModalStates[index] = true;
      }
      return newModalStates;
    });
  };

  /** Fechar o modal da foto */
  const closeModal = (productId, variantValue) => {
    setModalStates((prevModalStates) => {
      const newModalStates = [...prevModalStates];
      const index = produtos.findIndex(
        (produto) =>
          produto.product_id === productId &&
          produto.variant_value === variantValue
      );
      if (index !== -1) {
        newModalStates[index] = false;
      }
      return newModalStates;
    });
  };

  /** Setar os valores selecionados */
  const handleSelectChange = (
    productId: string | number,
    variant_value: string,
    key: string,
    selectedValue: any,
    subReasonId?: number | React.ChangeEvent<HTMLInputElement>,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (key === "obsDev" && e) {
      const { value } = e.target;

      updateProdutoData(
        productId,
        key,
        value,
        variant_value,
        subReasonId,
        "inputName"
      );

      setObsDevByProduct((prevObsDev) => ({
        ...prevObsDev,
        [`${productId}-${variant_value}`]: value,
      }));
    } else {
      updateProdutoData(
        productId,
        key,
        selectedValue,
        variant_value,
        subReasonId,
        "inputName"
      );

      const productIdVariantValue = `${productId}-${variant_value}`;

      setLastProductSelected(productIdVariantValue); 

      switch (key) {
        case "tipoReembolso":
          setTipoReembolso(selectedValue);
          break;
        case "motivoDevolucao":
          setMotivoDevolucao(selectedValue);
          setMotivoSelecionado(selectedValue);
          break;
        case "quantidade":
          setQuantidade(selectedValue);
          break;
        case "subDevolucao":
          //setSubDevolucao(selectValueSubDevolucao);
          setSubDevolucao(selectedValue);
          break;
        default:
          break;
      }
    }
    const productKey = `${productId}-${variant_value}`;
    const updatedProductData = {
      ...produtoSelecionadoData,
      key: productKey,
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
      subReasonId,
      variant_value,
      obsDev: key === "obsDev" ? selectedValue : obsDev,
      [key]: selectedValue,
    };
    setObsDev(key === "obsDev" ? selectedValue : obsDev);
    //console.log('mostra o componente',updatedProductData)
    updateProdutoData(productId, key, variant_value, subReasonId, "inputName", productKey);

    //console.log('cade o key', productKey)
    const selectedProductIndex = produtos.findIndex(
      (produto) =>
        produto.product_id === productId &&
        produto.variant_value === variant_value
    );
    
    if (selectedProductIndex !== -1) {
      const selectedProduct = produtos[selectedProductIndex];
    
      selectedProduct.selectedProduct = {
        ...selectedProduct.selectedProduct,
        [key]: selectedValue,
        key: productKey,
      } as SelectedProductTypeWithKey;
  

      const updatedProducts = [
        ...produtos.slice(0, selectedProductIndex),
        selectedProduct,
        ...produtos.slice(selectedProductIndex + 1),
      ];

      updateData({
        ...updatedProductData,
        products: updatedProducts,
      });
    }
  };

  /** Enviar para o próxima página */
  const handleConfirmar = () => {
    const dadosSelecionadosAtualizados = produtos.map((produto) => {
      const dadosProduto = produtoData[produto.product_id] || {};
      
      return {
        ...dadosSelecionados,
        ...produtoSelecionadoData,
        ...produto,
      };
    });
    const todosCamposPreenchidos = areAllFieldsFilled();
    const isMediaRequiredFilled = isFotoAdicaoValida;
    console.log('dadosSelecionadosAtualizados',dadosSelecionadosAtualizados)
    if (todosCamposPreenchidos) {
      if (payment_method.toLowerCase() === "cartão") {
        navigate("/shipping", {
          state: dadosSelecionadosAtualizados,
        });
      }       
      else if (tipoReembolso.toLowerCase() === "estorno") {
        setIsModalOpen(true);
        setDadosSelecionados(dadosSelecionadosAtualizados);
      } 
      else if (tipoReembolso.toLowerCase() === "cupom") {
        navigate("/data", {
          state: dadosSelecionadosAtualizados,
        });
        setDadosSelecionados(dadosSelecionadosAtualizados);
      } 
      else {
          navigate("/shipping", {
            state: dadosSelecionadosAtualizados,
          });
          setIsModalOpen(true);
          setDadosSelecionados(dadosSelecionadosAtualizados);
        }
    } else {
      console.error("Preencha todos os campos antes de confirmar");
      setIsBotaoConfirmarHabilitado(false);
      setIsMediaRequiredError(!isMediaRequiredFilled);
    }
  };
  
//console.log('socuerro', motivoSelecionado)
  return (
    <>
      <SH1 fontSize="18px">
        Preencha as informações do(s) produto(s) selecionado(s)
      </SH1>
      <Slider {...settings} className="col-md-10 c-slider-product">
        {produtos.map((produto, index) => (
          <Box
            typeBox="productselected"
            className="product-selected"
            key={produto.product_id && produto.variant_value}
          >
            <Box
              className="col-md-12 d-flex flex-md-row flex-column"
              style={{ padding: "20px 0px", margin: "0 auto" }}
            >
              <Box
                className="flex-md-column d-flex align-items-center justify-content-center col-md-4"
                margin="0px"
              >
                <a href={produto.url} target="_blank">
                  <img
                    className="product-selected-img"
                    src={produto.img}
                    alt={produto.name}
                  />
                </a>
                <div className="d-flex flex-column align-items-center">
                  <SH1
                    fontSize="15px"
                    fontSizesm="12px"
                    marginsm="0px 8px"
                    margin="12px 0px 8px 0px"
                    fontWeight={500}
                  >
                    {produto.name}
                  </SH1>
                  <SspanText fontSize="16px" fontSizesm="12px">
                    Variação: {produto.variant_value}
                  </SspanText>
                </div>
              </Box>
              <Box className="col-md-8" margin="0px" padding="0px" key={produto.product_id && produto.variant_value}>
                <div className="d-md-flex justify-content-between flex-wrap">
                  <div className="d-flex flex-column justify-content-center content-select position-relative mb-2">
                    <STextParagraph typeParagraph="select" className={!isMotivoDevolucaoValid ? 'danger': ''}>
                      *Por que quer devolver?
                    </STextParagraph>
                    <ListaSelected
                    isMotivoDevolucaoValid={isMotivoDevolucaoValid}
                      options={reasons.map((reason) => reason.description)}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          produto.variant_value,
                          "motivoDevolucao",
                          selectedValue
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.[produto.variant_value]
                          ?.motivoDevolucao
                      }
                    ></ListaSelected>
                    {!isMotivoDevolucaoValid && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "0px",
                          marginBottom:"0px",
                          position:"absolute",
                          bottom:"-5px"
                        }}
                      >
                        *Selecione um motivo válido
                      </p>
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select mb-2">
                    <STextParagraph typeParagraph="select">
                      *O que aconteceu?
                    </STextParagraph>

                    <ListaSelected
                        isMotivoDevolucaoValid={true}
                        options={subReasons[`${produto.product_id}-${produto.variant_value}`]?.map((subReason) => subReason.description) || []}
                        optionsSubReason={subReasons[`${produto.product_id}-${produto.variant_value}`]?.map((subReason) => ({
                          id: subReason.id,
                          name: subReason.description,
                        })) || []}
                        onChange={(selectedValue) =>
                          handleSelectChange(
                            produto.product_id,
                            produto.variant_value,
                            "subDevolucao",
                            selectedValue
                          )
                        }
                        selectedValue={
                          produtoData[produto.product_id]?.[produto.variant_value]?.subDevolucao
                        }
                      />


                  </div>
                  {produto.is_personalized ?(
                    <div className="d-none"></div>
                  ):(
                    <div className="d-flex flex-column justify-content-center content-select ">
                    <Box typeBox="informative" >
                      <IconInformative
                        width={24}
                        height={24}
                        className="informative"
                      ></IconInformative>
                      <div className="box-informative" style={{zIndex:999}}>
                        <IconInfoVale width={48}></IconInfoVale>
                        <h1>
                          Diferença entre
                          <strong className="green">Cupom</strong> e
                          <strong className="blue">Estorno</strong>
                        </h1>
                        <p className="text-informative mt-1">
                          Caso escolha a devolução com <strong>Cupom</strong>,
                          você receberá um vale compras no valor do seu pedido
                          na FutFanatics
                          <strong className="italic">em até 5 dias.</strong>
                        </p>
                        <p className="text-informative">
                          Caso escolha o <strong>Estorno</strong>, você receberá
                          o valor da sua compra
                          <strong className="italic">em até 15 dias.</strong>
                        </p>
                      </div>
                    </Box>
                    <STextParagraph typeParagraph="select">
                      *Tipo de Reembolso
                    </STextParagraph>
                    <ListaSelected
                    isMotivoDevolucaoValid={true}
                      options={["Cupom", "Estorno"]}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          produto.variant_value,
                          "tipoReembolso",
                          selectedValue
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.[produto.variant_value]
                          ?.tipoReembolso
                      }
                    ></ListaSelected>
                  </div>
                  )}
                  <div className="d-flex flex-column justify-content-center content-select ">
                    <STextParagraph typeParagraph="select">
                      *Quantidade
                    </STextParagraph>
                    <ListaSelected
                    isMotivoDevolucaoValid={true}
                      options={Array.from(
                        { length: produto.quantity },
                        (_, i) => i + 1
                      )}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          produto.variant_value,
                          "quantidade",
                          selectedValue as number | ""
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.[produto.variant_value]
                          ?.quantidade
                      }
                    />
                  </div>
                </div>
                <div className="d-md-flex justify-content-between">
                  
                </div>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      Observações
                    </STextParagraph>
                    <input
                      type="text"
                      name={`obsDev-${produto.product_id}-${produto.variant_value}`}
                      value={
                        obsDevByProduct[
                          `${produto.product_id}-${produto.variant_value}`
                        ] || ""
                      }
                      onChange={(e) =>
                        handleSelectChange(
                          produto.product_id,
                          produto.variant_value,
                          "obsDev",
                          e.target.value,
                          undefined,
                          e
                        )
                      }
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <Box
                      className="d-flex flex-column justify-content-center"
                      margin="12px 0px 0px 0px"
                    >
                      <div className="d-flex align-items-center">
                        <a
                          onClick={() =>
                            openModal(produto.product_id, produto.variant_value)
                          }
                        >
                          <Box typeBox="cam">
                            <IconCamera fill="#fff" width={25}></IconCamera>
                          </Box>
                        </a>
                        <STextParagraph typeParagraph="select">
                          Anexar fotos
                        </STextParagraph>
                      </div>
                      
                      {mediaRequired && !fotoAdicionada && produtoData[produto.product_id]?.[produto.variant_value]?.motivoDevolucao || produto.is_personalized && !fotoAdicionada? (
                        <p
                          style={{
                            color: "#000",
                            fontSize: "12px",
                            marginTop: "4px",
                          }}
                          key={`media-required-error-${produto.product_id}-${produto.variant_value}`}
                        >
                          *O envio de fotos é obrigatório
                        </p>
                      ):(<div></div>)}

                    </Box>
                  </div>
                </div>
                <ModalCamera
                  key={`${produto.product_id}-${produto.variant_value}`}
                  isOpen={modalStates[index]}
                  onRequestClose={() => closeModal(produto.product_id, produto.variant_value)}
                  onPhotoAdded={() =>
                    handlePhotoUploadComplete(produto.product_id, produto.variant_value)
                  }
                  dadosSelecionados={{ produto, produtoSelecionadoData }}
                  onPhotoUploadComplete={() =>
                    handlePhotoUploadComplete(produto.product_id, produto.variant_value)
                  }
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      {(!isFotoAdicaoValida || !areAllFieldsFilled()) && (
        <p
          style={{
            color: "#000",
            fontSize: "12px",
            marginTop: "8px",
            textAlign: "center",
            marginBottom: "-24px",
          }}
        >
          *Por favor, preencha todos os campos obrigatórios antes de confirmar.
        </p>
      )}
      <button
        onClick={handleConfirmar}
        disabled={!isFotoAdicaoValida || !areAllFieldsFilled()}
        className="button-fut"
      >
        Confirmar
      </button>
      <ModalData
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        modalData={modalData}
        dadosSelecionados={dadosSelecionados}
        onConfirm={() => navigate("/data", { state: dadosSelecionados })}
      />
      <OutOfDateModal
        isOpen={outOfDateModalIsOpen}
        onRequestClose={() => setOutOfDateModalIsOpen(false)}
        onClose={() => {}}
        daysAllowed={selectedReasonDaysAllowed} 
      />
            <ModalTimeout
      isOpen={modalIsOpen}
      onRequestClose={() => setOpenmodal(false)}
      ></ModalTimeout>
    </>
  );
};

export default ProductSelected;
