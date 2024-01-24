import Ordering from "../../components/Ordering";
import DatePicker from "../../components/datepicker";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import { Box } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import { SH1 } from "../../componentsStyled/Text";
import IconBack from "../../componentsStyled/icon/Iconback";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";
import DevBottom from "../../componentsStyled/icon/devbottom";
import DevTop from "../../componentsStyled/icon/devtop";
import { useNavigate, useLocation } from "react-router-dom";


export default function Devolution() {    
  const navigate = useNavigate();
  const handleHome = () =>{
    navigate("/");
  }
  const handleBack = () =>{
    navigate("/");
  }
    return (
        <>
        <Header></Header>
        <section className="c-menu"> 
            <div className="container">
                <button onClick={handleHome} style={{border:'none', background:'none'}}>
                <TroqueFut width={130} className="logo-troque-menu"></TroqueFut>
                </button>
        <Button typeButton="voltar" margin="0px" onClick={handleBack}>
          <IconBack width={20}></IconBack>
          Sair
        </Button>
            </div>
        </section>
        <SH1 textTransform="uppercase" fontSizesm="16px">Selecione qual devolução deseja acompanhar</SH1>
        <section className="c-devolution position-relative">
        <DevTop className="position-absolute arrow-top"></DevTop>
        <DevBottom className="position-absolute arrow-bottom"></DevBottom>
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa&nbsp;<a href="https://www.futfanatics.com.br/portal-de-ajuda" target="_blank">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
        <div className="container">
          
          <ListagemDevolucoes></ListagemDevolucoes>  
        </div>
        </section>
        <Footer></Footer>
        
        </>
    )

}