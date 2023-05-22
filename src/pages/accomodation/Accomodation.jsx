import { useParams, Navigate } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";

import Carrousel from "../../components/carrousel/Carrousel";
import "./accomodation.scss";
import redStar from "./../../assets/start-red.png";
import greyStar from "./../../assets/star_grey.png";

import Loader from "../../components/loader/Loader";
import useFetch from "./../../utils/useFetch";

function Accomodation() {
  const { id } = useParams();

  const accomodations = useFetch(window.location.origin + "/data.json");
  //
  //Si Fetch OK : recherche de l'objet method .find()
  //
  let accomodation;
  if (accomodations.fetchedData) {
    accomodation = accomodations.fetchedData.find((elt) => elt.id === id);
  }
  //
  //Si isLoading à TRUE : Affichage du composant loader (et de son Timer)
  //

  if (accomodations.isLoading) {
    console.log(accomodations.fetchedData);
    return <Loader />;
  }

  //
  //Si objet introuvable : retour 404
  //

  if (!accomodation) {
    return <Navigate to="/notFound" />;
  }

  //
  //Si tout est OK :
  //
  else {
    const rating = parseInt(accomodation.rating);
    const [forename, name] = accomodation.host.name.split(" ");

    return (
      <>
        <Carrousel
          pictures={accomodation.pictures}
          title={accomodation.title}
        />

        {/* // 
           //Création titres + tag
           // */}

        <section className="accomodation-detail-wrapper">
          <div className="accomodation-info">
            <h2>{accomodation.title}</h2>
            <p>{accomodation.location}</p>
            <div className="accomodation-info__tags-box">
              {accomodation.tags.map((tag, idx) => (
                <div key={`${tag}-${idx}`} className="accomodation-info__tag">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>

          {/* // 
           //Création des étoiles de notation
           // */}

          <div className="accomodation-profil">
            <div className="accomodation-profil__stars">
              {[...Array(5)].map((elt, idx) => {
                const ratingArrayValue = idx + 1;

                return ratingArrayValue <= rating ? (
                  <img src={redStar} key={"star" + idx} alt="étoile rouge" />
                ) : (
                  <img src={greyStar} key={"star" + idx} alt="étoile grise" />
                );
              })}
            </div>

            {/* // 
           //Création nom + mignature
           // */}

            <div className="accomodation-profil__host">
              <div className="accomodation-profil__name">
                <p>{forename}</p>
                <p>{name}</p>
              </div>
              <div className="accomodation-profil__picture">
                <img
                  src={accomodation.host.picture}
                  alt={accomodation.host.name}
                />
              </div>
            </div>
          </div>
        </section>

        {/* // 
           // Composant collapse x 2 
           // */}

        <section className="accomodation-collapse-wrapper">
          <Collapse
            title="Description"
            text={accomodation.description}
            collapseState={false}
            extraClass={"accomodation-collapse"}
          />
          <Collapse
            title="Equipements"
            text={accomodation.equipments}
            collapseState={false}
            extraClass={"accomodation-collapse"}
          />
        </section>
      </>
    );
  }
}

export default Accomodation;
