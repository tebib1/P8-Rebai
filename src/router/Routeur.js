import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FicheLogement from '../pages/FicheLogement';
import Erreur from '../pages/Erreur';
import APropos from '../pages/Apropos';

const Routeur = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fiche-logement/:id" element={<FicheLogement/>} />
          <Route path="*" element={<Erreur/>} />
          <Route path="/APropos" element={<APropos/>} />
        </Routes>
    </Router>
  );
}

export default Routeur;