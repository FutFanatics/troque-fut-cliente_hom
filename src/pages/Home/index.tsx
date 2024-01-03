import Button from "../../componentsStyled/Button";
import 'bootstrap/dist/css/bootstrap.css';
import './../../css/style.css';
import IconDevolucao from "../../img/icon/inicie.png"
import { SBoxIconFut } from "../../componentsStyled/Box";
import { STextParagraph, SspanText } from "../../componentsStyled/Text"; 
import IconFut from "../../componentsStyled/icon/iconfut";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import IconAcompanhe from "../../componentsStyled/icon/Iconacompanhe";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TroqueFut from "../../componentsStyled/icon/LogoTroqueFut";
import IconDoor from "../../componentsStyled/icon/Icondoor";
import DevTop from "../../componentsStyled/icon/devtop";
import DevBottom from "../../componentsStyled/icon/devbottom";

export default function Home() {
    return (
        <>
        <Header></Header>
        <section className="c-home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-content position-relative">
                        <DevTop className="position-absolute arrow-top arrow-top_home" width={200}></DevTop>
                        <DevBottom className="position-absolute arrow-bottom arrow-bottom_home"></DevBottom>
                        <TroqueFut width={280} className="logo-troque"></TroqueFut>
                        <STextParagraph padding="48px 0px 48px 0px" fontWeight={350} paddingsm="32px 0px">
                            O TroqueFut é uma plataforma de devoluções da empresa FutFanatics, onde você consegue realizar suas trocas sem  dificuldades e com tecnologias intuitivas.
                        </STextParagraph>
                        <Button path="/login" >
                            <IconDoor 
                                fill="white" 
                                width={20}></IconDoor>
                            <span>
                                Solicite uma Devolução  
                            </span> 
                        </Button>
                        <div className="d-flex d-md-none align-items-center">
                            <hr/>
                                <SspanText>ou</SspanText>
                            <hr/>
                        </div>
                        <Button typeButton="devolucao" path="/login-acompany"><IconAcompanhe width={25}/> 
                        <span>
                        Acompanhar sua Devolução
                        </span> </Button> 
                    </div>
                    <div className="col-md-5 col-img d-none d-md-flex justify-content-end align-items-end ">
                        <a href="https://www.futfanatics.com.br">
                            <SBoxIconFut>
                            <IconFut></IconFut>
                            </SBoxIconFut>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
            <Footer></Footer>
        
        </>
    )

}