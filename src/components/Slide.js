import React, { useState } from 'react';
import slideright from '../assets/slidegauche.png';
import slideleft from '../assets/slidedroit.png';

const Slide = ({ pictures, title }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImage(prev => (prev > 0 ? prev - 1 : pictures.length - 1));
    };

    const goToNextImage = () => {
        setCurrentImage(prev => (prev < pictures.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className='slide'>
            <img className="slideright" onClick={goToPreviousImage} src={slideright} alt="Flèche vers la gauche" />
            <img className="picture" src={pictures[currentImage]} alt={title} />
            <img className="slideleft" onClick={goToNextImage} src={slideleft} alt="Flèche vers la droite" />
        </div>
    );
};

export default Slide