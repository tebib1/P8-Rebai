import React from "react";
import data from '../data/data.json';
import { useParams } from 'react-router-dom';


const Card = () => {
    const { id } = useParams();
    const carte = data.find(carte => carte.id === id);

    if (!carte) return <div>Carte non trouvée</div>;

    return (
        <div className="card">
            <img src={carte.cover} alt={carte.title} />
            <div className="alignement">
                <div className="title">
                    <h2>{carte.title}</h2>
                    <p>{carte.location}</p>
                </div>
                <div className="hostname">
                    <p>{carte.host.name}</p>
                    <img src={carte.host.picture} alt={carte.name} />
                </div>
            
            </div>

        </div>
    );
};

export default Card;