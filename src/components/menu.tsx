import {   useNavigate } from "react-router-dom";
import TroqueFut from "../componentsStyled/icon/LogoTroqueFut";
import React from 'react';

interface MenuProps {
    typeOption: string;
    children?: React.ReactNode;
  }

  const Menu: React.FC<MenuProps> = ({ typeOption , children }) => {
      const navigate = useNavigate();
    const handleHome = () =>{
      navigate("/");
    }
    return(
        <section className="c-menu"> 
            <div className="container">
                <button onClick={handleHome} style={{border:'none', background:'none'}}>
                <TroqueFut width={130} className="logo-troque-menu"></TroqueFut>
                </button>
                {children}
            </div>
        </section>
    )
    
}
export default Menu;