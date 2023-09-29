import React from "react";

import LOGO from  '../assets/LOGO.png';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
      <div className="header">
          <img className='logo-header' src={LOGO} alt="Logo de Kasa" />
          <div className="navigation">
              <nav>
                  <NavLink to="/">
                      <div>Accueil</div>
                  </NavLink>
                  <NavLink to="/Apropos">
                      <div>A Propos</div>
                  </NavLink>
              </nav>
          </div>
      </div>
  
    );
  };
  
  export default Header;
  