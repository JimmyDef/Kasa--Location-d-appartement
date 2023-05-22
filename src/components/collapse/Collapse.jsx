import "./collapse.scss";
import chevron from "./../../assets/chevron_down_svg.svg";
import { useState } from "react";
import PropTypes from "prop-types";

function Collapse({ title, text, collapseState, extraClass }) {
  const [isOpen, setIsOpen] = useState(collapseState);

  //--------------------------
  // Fonction en cas de tableau récupéré dans le state "text" (et non une string)
  //--------------------------
  const description = () => {
    if (Array.isArray(text)) {
      const equipments = text.map((elt, idx) => (
        <li key={`${elt}-${idx}`}>{elt}</li>
      ));

      return <ul> {equipments} </ul>;
    }
    return <p>{text}</p>;
  };
  //--------------------------
  // Fonction pour inverser le déploiement des collapses (true/false)
  //--------------------------
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse  ${extraClass}`}>
      <div className="collapse__title-box" onClick={handleToggle}>
        <h2>{title}</h2>

        <img
          src={chevron}
          alt="chevron up down"
          className={isOpen ? "rotate-chevron" : ""}
        />
      </div>

      <div
        className={
          isOpen ? "collapse__description" : "collapse__description--hidden"
        }>
        {description()}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  collapseState: PropTypes.bool,
  extraClass: PropTypes.string,
};
Collapse.defaultProps = {
  extraClass: "",
};

export default Collapse;
