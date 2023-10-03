import React, { useState } from 'react';

import flecheup from '../assets/fleche_up.png';
import flechedown from '../assets/fleche_down.png';



const CollapseItem = ({ title, content,children }) => {
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
     
      {isOpen && content && <p className="text-collapse-about">{content}</p>}

      {isOpen && children && <p className="text-collapse-about">{children}</p>}
    
    </>
  );
};

export default CollapseItem;