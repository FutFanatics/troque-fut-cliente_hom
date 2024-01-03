import DatePicker from "../../components/datepicker";
import FollowData from "../../components/followdata";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ListagemDevolucoes from "../../components/listagemdevolucao";
import Menu from "../../components/menu";
import ProgressDevolution from "../../components/progress";
import { Box } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import { SH1 } from "../../componentsStyled/Text";
import IconBack from "../../componentsStyled/icon/Iconback";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import { useNavigate, useLocation } from "react-router-dom";
import DevTop from "../../componentsStyled/icon/devtop";
import DevBottom from "../../componentsStyled/icon/devbottom";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";


export default function Follow() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/devolution');
  };
  const { state } = useLocation();
  const devolutionId = state?.devolutionId;
  const handleHome = () =>{
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
            </div>
        </section>
      <div className="container">
        <div className="d-flex align-items-center mb-3 mt-3 ">
          <Button typeButton="voltar" margin="0px"  onClick={handleBack}>
            <IconBack width={20}></IconBack>
            Voltar
          </Button>
          <SH1 textTransform="uppercase" margin="0px auto 0px auto" marginsm="0px auto 16px auto">
            Acompanhe sua devolução
          </SH1>
        </div>
      </div>

      <div className="c-follow position-relative">
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona? Acesse nossa&nbsp;
            <a href="https://www.futfanatics.com.br/portal-de-ajuda" target="_blank">Central de ajuda</a>
          </div>
          <IconHelp width={30} />
        </Box>
        <div className="container">
          <div className="row mt-4 mb-4 justify-content-between flex-column-reverse flex-md-row">
            <FollowData devolutionId={devolutionId}></FollowData>
            <ProgressDevolution devolutionId={devolutionId} />
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}
