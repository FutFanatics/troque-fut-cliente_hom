import React, { useState } from "react";
import { Box } from "../componentsStyled/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { STextParagraph } from "../componentsStyled/Text";
import IconIntimo from "../componentsStyled/icon/iconintimo";
import IconExterno from "../componentsStyled/icon/iconexterno";
import IconKits from "../componentsStyled/icon/iconkits";
import IconLuz from "../componentsStyled/icon/iconluz";
import IconSharp from "../componentsStyled/icon/iconsharp";
import IconDefect from "../componentsStyled/icon/icondefect";

interface TipoFotosProps {
  className?: string;

}

const TipoFotos: React.FC<TipoFotosProps> = ({ className }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              arrows:false,
              infinite:false,
            }
          },
        ]
      };
  return (
    <>
      <div className='col-md-8 mt-5 mb-5 col-12'>
      <Slider {...settings} className='slide slide-attetion'>
          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconLuz width={60}></IconLuz>
              <STextParagraph fontSize="14px" fontSizesm="12px">
              Certifique-se de estar em um ambiente bem iluminado;
              </STextParagraph>
            </Box>
          </Box>

          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconSharp width={60}></IconSharp>
              <STextParagraph fontSize="14px" fontSizesm="12px">
              Faça somente o upload de fotos nítidas.
              </STextParagraph>
            </Box>
          </Box>

          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconDefect width={60}></IconDefect>
              <STextParagraph fontSize="14px" fontSizesm="12px">
              Reserve ao menos uma foto para mostrar defeito, caso possua.
              </STextParagraph>
            </Box>
          </Box>
      </Slider>
    </div>
    </>
  );
};
export default TipoFotos;
