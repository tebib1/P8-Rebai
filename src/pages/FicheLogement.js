import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from "../components/Card";
import CollapseItem from '../components/Collapse';
import data from '../data/data.json';
import starActive from '../assets/starActive.png';
import starInactive from '../assets/starInactive.png';



const FicheLogement = () => {
  const { id } = useParams();
  const selectedHousing = data.find((item) => item.id === id);

  const ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <img
        key={i}
        src={i <= selectedHousing?.rating ? starActive : starInactive}
        alt={`Star ${i}`}
        className="stars"
      />
    );
  }


  return (
    <div>
      <Header />
      <main>
        <div>
          <Card />
          <div className="rating-stars">{ratingStars}</div>
          <div className="collapsess">
            <div className="align">
              <CollapseItem

                title="Description"
                content={selectedHousing.description}
              />
            </div>
            <div className="align">
              <CollapseItem
                title="Equipements"
                content={selectedHousing.equipments}
              />
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
