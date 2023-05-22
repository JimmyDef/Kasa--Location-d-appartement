import PropTypes from "prop-types";
import "./card.scss";

import { Link } from "react-router-dom";

function card({ title, cover, id }) {
  //--------------------------
  // Utilisation des props pour générer les cards depuis: <Home/> => Fetch => Card => link
  //--------------------------

  return (
    <Link to={`/accomodation/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  id: PropTypes.string,
};

export default card;
