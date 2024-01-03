import { STextParagraph } from "../componentsStyled/Text";
import LogoFut from "../componentsStyled/icon/LogoFut";

interface FooterProps {
    className?: string;
  }
const Footer : React.FC<FooterProps> = ({ className }) => {
    return(
        <section className="c-footer">
            <LogoFut className="footer-logo"></LogoFut>
            <div className="footer-box">
                <STextParagraph typeParagraph="paragraphfooter">
                    FF.Com Esportes Ltda CNPJ 05.328.923/0001-90 Rodovia Arthur Boigues Filho, 59 CEP: 19026-650 Presidente Prudente - SP Copyright 2012-2023 www.futfanatics.com.br - TODOS OS DIREITOS RESERVADOS. É vetada a reprodução total ou parcial das informações aqui veiculadas sem a expressa autorização da administração do site. Os preços e condições de pagamento são válidos exclusivamente para compras realizadas via internet.
                </STextParagraph>
            </div>
            
        </section>
    )
}
export default Footer;