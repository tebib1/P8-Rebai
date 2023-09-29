import React from "react";


import { NavLink } from 'react-router-dom';

const Cards = ({id, title, cover }) => {
  return (
<NavLink to={`/fiche-logement/${id}`}>
    <div id="cards">
    <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
    </NavLink>

  );
};

export default Cards;
