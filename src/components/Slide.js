import React, { useState } from 'react';
import slideright from '../assets/slidegauche.png';
import slideleft from '../assets/slidedroit.png';

const Slide = ({ pictures, title }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const totalSlides = pictures.length;

    const goToPreviousImage = () => {
        setCurrentImage(prev => (prev > 0 ? prev - 1 : pictures.length - 1));
    };

    const goToNextImage =    () => {
        setCurrentImage(prev => (prev < pictures.length - 1 ? prev + 1 : 0));
    };
    const showArrows = pictures.length > 1;

    return (
        <div className='slide'>
            {showArrows &&<img className="slideright" onClick={goToPreviousImage} src={slideright} alt="Flèche vers la gauche" />}
            <img className="picture" src={pictures[currentImage]} alt={title} />
            <p></p>
            {showArrows &&<img className="slideleft" onClick={goToNextImage} src={slideleft} alt="Flèche vers la droite" />}
            <div className="slide-counter">
        {totalSlides > 1 && `${currentImage + 1}/${totalSlides}`}
      </div>
        </div>
    );
};

export default Slide