import React, { useState } from 'react';

import flecheup from '../assets/fleche_up.png';
import flechedown from '../assets/fleche_down.png';



const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="collapse_title">
        {title}
        <div onClick={toggleCollapse}  >
          {isOpen ? <img src={flechedown} alt="Flèche vers le bas" /> : <img src={flecheup} alt="Flèche vers le haut" />}
        </div>

      </div>
     
      {isOpen && <p className="text-collapse-about">{content}</p>}
    
    </>
  );
};

export default CollapseItem;