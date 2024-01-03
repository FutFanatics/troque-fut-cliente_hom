import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { STextParagraph } from '../componentsStyled/Text';
import IconProduct from '../componentsStyled/icon/iconproduct';
import { Box } from '../componentsStyled/Box';
import IconExterno from '../componentsStyled/icon/iconexterno';
import IconIntimo from '../componentsStyled/icon/iconintimo';
import IconKits from '../componentsStyled/icon/iconkits';

const SlidesProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          dots:true,
          infinite:true,
          arrows:false,
        }
      }
    ]
  };

  return (
    <div className='col-md-10'>
      <Slider {...settings} className='slide'>
          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconProduct width={60}></IconProduct>
              <STextParagraph fontSize="14px" fontSizesm='12px'>
                O Produto não pode apresentar sinais de uso, com manchas,
                sujeira ou suor.
              </STextParagraph>
            </Box>
          </Box>

          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconExterno width={60}></IconExterno>
              <STextParagraph fontSize="14px" fontSizesm='12px'>
                Preserve as embalagens internas e externas do produto.
              </STextParagraph>
            </Box>
          </Box>
          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconIntimo width={60}></IconIntimo>
              <STextParagraph fontSize="14px" fontSizesm='12px'>
              Não é possível realizar a troca de roupas íntimas e de compressão.
              </STextParagraph>
            </Box>
          </Box>
          <Box typeBox='item'>
            <Box typeBox="atention">
              <IconKits width={60}></IconKits>
              <STextParagraph fontSize="14px" fontSizesm='12px'>
              Não é possível fazer a troca de itens individuais de kits prontos.
              </STextParagraph>
            </Box>
          </Box>
      </Slider>
    </div>
  );
};

export default SlidesProducts;
