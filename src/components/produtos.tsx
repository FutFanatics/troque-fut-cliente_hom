import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SH1, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import Slider from "react-slick";
import { Produto } from "./Types";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDataContext } from '../context/DataContext'; 
import ProductSelected from "./produtoselected";

interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  delivery_date?: string;
  payment_method?: string;
  onSelect?: () => void;
  orderId?: any;
  selectedId?: string;
  handleSelect?: (produto: Produto) => void;
  allowed_clique_retire?: string;
}

const Produtos: React.FC<ProdutosProps> = ({
  produtos,
  className,
  delivery_date,
  payment_method,
  orderId,
  selectedId: propSelectedId,
  allowed_clique_retire,
  handleSelect
}) => {
  const { data, updateData } = useDataContext();
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);
  const [showProductSelected, setShowProductSelected] = useState(false);
  const [produtoSelecionadoData, setProdutoSelecionadoData] = useState<any>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); 

  const prevSelectedId = useRef<string | null>(null); 
  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem('selectedProducts');
    if (storedSelectedProducts) {
      setProdutosSelecionados(JSON.parse(storedSelectedProducts));
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    if (propSelectedId !== prevSelectedId.current) {
      setProdutosSelecionados([]);
    }

    // Update the previous selectedId
    prevSelectedId.current = propSelectedId;
  }, [propSelectedId]);

  const handleSelectedIdChange = (newSelectedId: string) => {
    // Add logic to handle the change of selectedId
    // For example, you can update the state or perform any other actions
    // setLocalSelectedId(newSelectedId);
  };

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(produtosSelecionados));
    setIsButtonDisabled(produtosSelecionados.length === 0);
  }, [produtosSelecionados]);

  const handleCheckboxChange = (produto: Produto) => {
    const isProductSelected = produtosSelecionados.some((p) => (
      p.product_id === produto.product_id && p.variant_value === produto.variant_value
    ));

    if (isProductSelected) {
      const updatedProdutos = produtosSelecionados.filter((p) => (
        p.product_id !== produto.product_id || p.variant_value !== produto.variant_value
      ));
      setProdutosSelecionados(updatedProdutos);
    } else {
      setProdutosSelecionados([...produtosSelecionados, produto]);
    }

    setShowProductSelected(false);
  };

  const handleDataUpdate = (dadosSelecionados: any) => {

  };

  const handleProdutoSelect = (produto: Produto) => {
    if (handleSelect) {
      handleSelect(produto);
    }
  };

  const handleConfirmar = () => {
    const dadosSelecionados = {
      delivery_date: delivery_date,
      payment_method: payment_method,
      allowed_clique_retire: allowed_clique_retire,
      selectedId: propSelectedId,
    };

    updateData(dadosSelecionados);

    setShowProductSelected(true);
    setProdutoSelecionadoData(dadosSelecionados);
  };

  const sliderSettings = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      {showProductSelected ? (
        <ProductSelected
          produtos={produtosSelecionados}
          selectedId={propSelectedId}
          onDataUpdate={handleDataUpdate}
          produtoSelecionadoData={produtoSelecionadoData}
          delivery_date={delivery_date}
          payment_method={payment_method}
        />
      ) : (
        <>
          <Slider {...sliderSettings} className={`col-md-5 c-slider-product ${className}`}>
            {produtos.map((produto, index) => (
              <Box typeBox="product" key={index}>
                <div className="produto-box_img ">
                  <img src={produto.img} alt={produto.name} />
                </div>
                <div className="produto-box_text">
                  <SH1
                      typeTitle="title-product"
                      fontSize="16px"
                      textAlign="start"
                      fontWeight={600}
                      margin="8px 0px 8px 0px"
                      color="#1D1B20"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                      }}
                    >
                      {produto.name}
                    </SH1>
                <div className = "c-tooltip"><span className="tooltiptext">{produto.name}</span></div>
                </div>
                <div className="produto-box_text d-flex flex-column justify-content-center">
                  <SspanText typeSpan="namProduct">
                    Código:
                    <SspanText typeSpan="namProduct">{produto.product_id}</SspanText>
                  </SspanText>

                  <SspanText typeSpan="namProduct">
                    Preço: <SspanText typeSpan="namProduct">{produto.price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(produto.price)) : 'N/A'}</SspanText>
                  </SspanText>

                  <SspanText typeSpan="namProduct">
                    Variação:
                    <SspanText typeSpan="namProduct"> {produto.variant_value}</SspanText>
                  </SspanText>
                </div>
                <Button
                  className={`mt-2 ${produtosSelecionados.some((p) => (
                    p.product_id === produto.product_id && p.variant_value === produto.variant_value
                  )) ? 'clicked' : ''}`}
                  typeButton="select"
                  onClick={() => handleCheckboxChange(produto)}
                  disabled={produtosSelecionados.some((p) => p.variant_value !== produto.variant_value)}
                >
                  {produtosSelecionados.some((p) => (
                    p.product_id === produto.product_id && p.variant_value === produto.variant_value
                  )) ? 'Selecionado' : 'Selecionar'}
                </Button>
              </Box>
            ))}
          </Slider>
          
          {produtosSelecionados.length > 0 && (
            <Button onClick={handleConfirmar} className={`mb-3 ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled} margin="24px auto">
              Continuar
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default Produtos;
