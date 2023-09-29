import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CollapseItem from '../components/Collapse';

import background from '../assets/background_Apropos.png';

function Apropos() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          divbanner="medium"
          img={background}
          alt="Image de montagne"
        />


        <div className='collapses'>
            <CollapseItem
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les informations sont régulièrements 
               vérifiées par nos equipes"
            />
          
          
            <CollapseItem

              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
              discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
            />
        
          
            <CollapseItem
              title="Service"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
        discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
            />
        
            <CollapseItem
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par 
        nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
         également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Apropos;