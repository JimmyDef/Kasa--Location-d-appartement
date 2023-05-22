import { useEffect } from "react";
import "./loader.scss";
import { useNavigate } from "react-router-dom";

function Loader() {
  const navigate = useNavigate();

  //--------------------------
  // Création d'un Timer avec le Loader. Renvoie sur la page 404 au bout de 6sec
  //--------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/notFound");
    }, 6000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
