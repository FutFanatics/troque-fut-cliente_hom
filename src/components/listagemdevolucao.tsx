import React, { useEffect, useState } from "react";
import axios from "axios";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import DatePicker from "./datepicker";
import { Box } from "../componentsStyled/Box";
import DevolutionItem from "./devolutionitem";
import Button from "../componentsStyled/Button";
import IconSearch from "../componentsStyled/icon/iconsearch";
import IconNull from "../componentsStyled/icon/iconNull";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import ModalTimeout from "./modaltimeout";
import Ordering from "./Ordering";

type Devolution = {
  id: string;
  imgs: { url: string }[];
  created_at: string;
};

const ListagemDevolucoes: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
  const [devolucoes, setDevolucoes] = useState<Devolution[]>([]);
  const [sortingOption, setSortingOption] = useState<string | null>(null);
  const [modalIsOpen, setOpenmodal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    let auth = localStorage.getItem("auth");
    if (auth) {
      const authObj = JSON.parse(auth);

      const username = authObj.email;
      const password = authObj.token;
      const text: string = username + ":" + password;
      const encoder: TextEncoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(text);

      const customerId = authObj.customerId;
      const dataArray: number[] = Array.from(data);

      const binaryString: string = String.fromCharCode.apply(null, dataArray);
      const basicAuth: string = btoa(binaryString);

      const fetchDevolucoes = async () => {
        try {
          const response = await axios.get(
            `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}`,
            {
              timeout: 10000,
              headers: {
                Authorization: "Basic " + basicAuth,
              },
            }
          );

          const fetchedDevolucoes = response.data;

          if (fetchedDevolucoes.length === 0) {
            window.location.href = 'https://troqueold.futfanatics.com.br/acompanhar';
          } else {
            setDevolucoes(fetchedDevolucoes);
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            openModal();
          } else {
            // Handle other errors if needed
          }
        }
      };
      fetchDevolucoes();
    }
  }, [selectedDate, currentDate]);

/*   useEffect(() => {
    // Function to handle sorting logic
    const sortDevolucoes = () => {
      if (sortingOption === "Mais Antigo") {
        setDevolucoes((prevDevolucoes) => [...prevDevolucoes].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()));
      } else if (sortingOption === "Mais Novo") {
        setDevolucoes((prevDevolucoes) => [...prevDevolucoes].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      } else {
        // Reset sorting
        setDevolucoes(fetchedDevolucoes);
      }
    };

    sortDevolucoes();
  }, [sortingOption, fetchedDevolucoes]); */

  const handleSearch = () => {
    const filteredDevolucoes = devolucoes.filter((devolucao) => {
      const createdAtDate = new Date(devolucao.created_at);
      return (
        (!selectedDate || createdAtDate >= selectedDate) &&
        (!currentDate || createdAtDate <= currentDate)
      );
    });

    setDevolucoes(filteredDevolucoes);
  };

  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const openModal = () => {
    setOpenmodal(true);
  };

  const closeModal = () => {
    setOpenmodal(false);
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-3 align-items-center box-date flex-column flex-md-row">
          <SH1 typeTitle="acompanhe">Selecione um período:</SH1>
          <div className="d-flex">
            <div className="d-flex flex-column container-date">
              <label>Data início:</label>
              <DatePicker
                onSelectDate={setSelectedDate}
                placeholder="Selecione uma data"
                onChange={setSelectedDate}
              />
            </div>
            <div className="d-flex flex-column container-date">
              <label>Data Final:</label>
              <DatePicker
                onSelectDate={setCurrentDate}
                selected={currentDate}
                placeholder="Data Atual"
                onChange={setSelectedDate}
              />
            </div>
            <Button onClick={handleSearch} typeButton="search">
              <IconSearch width={18}></IconSearch>
            </Button>
          </div>
        </div>
        <div className="d-md-flex justify-content-between">
          <SH1 color="#777" fontSize="16px" fontWeight={350} textAlign="start">
            Lista de devoluções
          </SH1>
          <Ordering onChange={(e) => setSortingOption(e.target.value)}></Ordering>
        </div>
        {isMobile ? (
          <div className="d-md-flex flex-wrap justify-content-center">
            {devolucoes.length === 0 ? (
              <Box typeBox="not-dev">
                <div className="content d-flex flex-column align-items-center">
                  <IconNull width={50}></IconNull>
                  <STextParagraph fontSize="14px" color="#777">
                    Nenhuma devolução encontrada
                  </STextParagraph>
                  <STextParagraph fontSize="14px" color="#777">
                    no período selecionado.
                  </STextParagraph>
                </div>
              </Box>
            ) : (
              <Slider {...settings} className="slide-follow">
                {devolucoes.map((devolucao) => (
                  <DevolutionItem key={devolucao.id} devolucao={devolucao} />
                ))}
              </Slider>
            )}
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            {devolucoes.length === 0 ? (
              <Box typeBox="not-dev">
                <div className="content d-flex flex-column align-items-center">
                  <IconNull width={50}></IconNull>
                  <STextParagraph fontSize="14px" color="#777">
                    Nenhuma devolução encontrada
                  </STextParagraph>
                  <STextParagraph fontSize="14px" color="#777">
                    no período selecionado.
                  </STextParagraph>
                </div>
              </Box>
            ) : (
              devolucoes.map((devolucao) => (
                <DevolutionItem key={devolucao.id} devolucao={devolucao} />
              ))
            )}
          </div>
        )}
      </div>
      <ModalTimeout isOpen={modalIsOpen} onRequestClose={closeModal}></ModalTimeout>
    </>
  );
};

export default ListagemDevolucoes;
