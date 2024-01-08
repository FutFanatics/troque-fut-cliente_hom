import React, { useState, useEffect } from "react";
import axios from "axios";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import IconNull from "../componentsStyled/icon/iconNull";

import ProductSelected from "./produtoselected";
import Produtos from "./produtos";
import ModalAceite from "./modalaceite";
import ModalTimeout from "./modaltimeout";

interface ListaProdutosProps {
  className?: string;
  selectedOption?: string;
  selectedId?: string;
}

interface Produto {
  product_id: string;
  name?: string;
  variant_value?: string;
  price?: number;
  img?: string;
  url?: string;
}

interface Pedido {
  id: string;
  status: string;
  Products: Produto[];
}

const ListaProdutos: React.FC<ListaProdutosProps> = ({
  className,
  selectedId,
}) => {
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  );
  const [delivery_date, setDelivery_date] = useState("");
  const [payment_method, setPayment_method] = useState("");
  const [allowed_clique_retire, setAllowed_clique_retire] = useState("");
  const [showProductSelected, setShowProductSelected] = useState(false);
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const[modalIsOpen, setOpenmodal]= useState(false)

  const openModal =() =>{ 
    setOpenmodal(true)
  }
  const closeModal =() =>{
    setOpenmodal(false)
  }

  useEffect(() => {
    setProdutosSelecionados([]);
    setIsButtonDisabled(true);
    setProdutoSelecionado(null);
  
    let auth = localStorage.getItem("auth");
  
    if (auth) {
      const authObj = JSON.parse(auth);
      const username = authObj.email;
      const password = authObj.token;
      const text: string = username + ":" + password;
      const encoder: TextEncoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(text);
  
      const dataArray: number[] = Array.from(data);
      const binaryString: string = String.fromCharCode.apply(null, dataArray);
      const basicAuth: string = btoa(binaryString);
  
      /* let timeoutId; */
  
      const fetchData = () => {
        axios
          .get(
            `https://api.troquefuthomologacao.futfanatics.com.br/api/order/get/${selectedId}`,
            {
              timeout: 10000,
              headers: {
                Authorization: "Basic " + basicAuth,
              },
            }
          )
          .then(function (response) {
            setPedido(response.data);
            setDelivery_date(response.data.delivery_date || "");
            setPayment_method(response.data.payment_method || "");
            setAllowed_clique_retire(response.data.allowed_clique_retire);
            setShowProductSelected(false);
          })
          
          .catch(function (error) {
            if (error.response && error.response.status === 401) {
              openModal()
            } else {            }
          });
      };
  
      fetchData();
    }
  }, [selectedId]);

  useEffect(() => {
    setProdutoSelecionado(null);
  }, [selectedId]);

  const onSelectProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };



  return (
    <>
      <hr></hr>
      <section className="c-Lista">
        <div className={`container ${className}`}>
          {selectedId ? (
            <>
              <SH1
                textAlign="start"
                color="#777777"
                fontWeight={350}
                fontSize="16px"
                fontSizesm="14px"
              >
                Lista de Produtos do Pedido:# {selectedId}
              </SH1>

              {produtoSelecionado === null && pedido && pedido.Products && pedido.Products.length > 0 ? (
                <div
                  className="mt-1 mb-2 justify-content-center align-items-center flex-wrap"
                  style={{ justifyContent: "center" }}
                >
                  <Produtos
                    produtos={pedido.Products}
                    selectedId={selectedId || ""}
                    handleSelect={onSelectProduto}
                    key={selectedId}
                    delivery_date={delivery_date}
                    payment_method={payment_method}
                    allowed_clique_retire={allowed_clique_retire}
                  />
                </div>
              ) : (
                <div style={{ height: "30vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
                <div className="d-flex flex-column align-items-center">
                <IconNull width={50}></IconNull>
                <div className="">
                  <STextParagraph fontSize="14px" color="#777">
                    Não há mais itens
                  </STextParagraph>
                  <STextParagraph fontSize="14px" color="#777">
                    para serem devolvidos nesse pedido.
                  </STextParagraph>
                </div>
              </div>

                </div>
              )}
              
              {showProductSelected && produtoSelecionado !== null && (
                <ProductSelected
                  produtos={produtosSelecionados}
                  delivery_date={delivery_date}
                  payment_method={payment_method}
                />
              )}
            </>
          ) : (
            <div style={{ height: "30vh"}}>
              <SH1
                textAlign="start"
                color="#777777"
                fontWeight={350}
                fontSize="16px"
                marginsm="16px 0px 64px 0px"
                fontSizesm="14px"
              >
                Lista de Produtos do Pedido:# {selectedId}
              </SH1>
              <div className="d-flex flex-column align-items-center">
                <IconNull width={50}></IconNull>
                <div className="">
                  <STextParagraph fontSize="14px" color="#777">
                    Para visualizar os produtos
                  </STextParagraph>
                  <STextParagraph fontSize="14px" color="#777">
                    selecione um pedido acima
                  </STextParagraph>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ModalTimeout
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ></ModalTimeout>
    </>
  );
};

export default ListaProdutos;
