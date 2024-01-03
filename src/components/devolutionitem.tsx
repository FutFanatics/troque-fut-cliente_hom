import React, { useEffect, useState } from "react";
import axios from "axios";
import { SH1 } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import { Devolution } from "./Types";
import Slider from "react-slick";
import Button from "../componentsStyled/Button";
import IconArrowRight from "../componentsStyled/icon/Iconarrowright";
import Default from "../img/default-devolution.png"
import IconSucess from "../componentsStyled/icon/Iconsucess";
import { useNavigate } from "react-router-dom";
interface DevolutionItemProps {
  devolucao: {
    id: string;
    imgs: { url: string }[];
    created_at: string;
    result?: string;
  };
}

const DevolutionItem: React.FC<DevolutionItemProps> = ({ devolucao }) => {
  const navigate = useNavigate();
  const formatDate = (dateTimeString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateTimeString).toLocaleDateString('pt-BR', options);
  };

  const formatTime = (dateTimeString: string) => {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleTimeString('pt-BR', options);
  };
  const handleFollowClick = () => {
    navigate("/follow", { state: { devolutionId: devolucao.id } });
  };
  const devolu = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    prevarrow:false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const getStatusStyle = () => {
    return devolucao.result === "pending" ? "acompanhar" : "concluída";
  };
  const getIcon = () => {
    
    return devolucao.result === "pending" ? <IconArrowRight width={16} /> : <IconSucess width={16}/>;
    
  };


  return (
    <Box typeBox="product-devolution">
      <div key={devolucao.id}>
      {Array.isArray(devolucao.imgs) && devolucao.imgs.length > 0 ? (
        <Slider {...devolu} className="devolution-img-slide">
          {devolucao.imgs.map((img, index) => (
            <div key={index} className="d-flex justify-content-center">
              <img src={img.url} alt="Devolução" />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="devolution-structure">
          <img src={Default}/>
        </div>
      )}
        <div className="mt-3">
          <p>
            <strong>ID:</strong> {devolucao.id}
          </p>
          <p>{formatDate(devolucao.created_at)} {formatTime(devolucao.created_at)}</p>
          <Button typeButton="devolution-status" className={`${getStatusStyle()}`} onClick={handleFollowClick}>
          {devolucao.result === "pending" ? "Acompanhar" : "Concluída"}{getIcon()} 
          </Button>
        </div>
      </div>
    </Box>
  )

}
export default DevolutionItem;