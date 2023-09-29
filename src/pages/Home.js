import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import data from '../data/data.json';

import background from '../assets/Background.png';



function Home() {
  return (
    <div>
      <Header/>
      <main className='home_body'>
        <Banner
        divbanner="medium"
        img={background}
      alt="Image de montagne"
      text="Chez vous, partout et ailleurs"
        />

        <div className='cards'>
          {data.map(cardData => (
            <Cards
              key={cardData.id}
              id={cardData.id}
              title={cardData.title}
              cover={cardData.cover}
            />
             ))}
        </div>
      </main>
      <Footer/>

      
    </div>
  );
}

export default Home;