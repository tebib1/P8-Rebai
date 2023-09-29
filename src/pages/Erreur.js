import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ERROR from '../assets/404.png';

import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Header/>
      <main className='error'> 
      <img src={ERROR} alt='message derreur' />
      <p className='first_message'>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/"><p className='second_message'>Retourner sur la page d’accueil</p></NavLink>
      </main>
      <Footer/>
    </div>
  );
}

export default ErrorPage;