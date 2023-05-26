import "./home.scss";
import useFetch from "./../../utils/useFetch";
import Banner from "./../../components/banner/Banner";
import Loader from "./../../components/loader/Loader";
import Card from "./../../components/card/Card";

function Home() {
  //--------------------------
  //utilisation du Hook personnalisé pour récupérer les "state" associés ( Fetch, loading)
  //--------------------------

  const accomodations = useFetch(
    "https://jimmydef.github.io/Kasa--Location-d-appartement/data.json"
  );

  return (
    <>
      <Banner img="img-cliff" text="Chez vous, partout et ailleurs" />

      {/* //
// Loading (5sec max) ou display des cards avec leurs propriétés
// */}

      {accomodations.isLoading ? (
        <Loader />
      ) : (
        <section className="rentals">
          {accomodations.fetchedData.map((rental, idx) => (
            <Card
              cover={rental.cover}
              title={rental.title}
              key={`${rental.id}-${idx}`}
              id={rental.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Home;
