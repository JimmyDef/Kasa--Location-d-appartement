import { Link } from "react-router-dom";
import "./notFound.scss";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}
