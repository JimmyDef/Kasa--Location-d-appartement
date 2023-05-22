import { useState, useEffect } from "react";
//--------------------------
// Realisation du fetch  + gestion state pour le loader
//--------------------------

function useFetch(url) {
  // State pour la récupération des données :
  const [fetchedData, setFetchedData] = useState([]);

  if (fetchedData) {
  }

  // State pour la gestion du loader :
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log("~ getData ~ error:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { fetchedData, isLoading };
}

export default useFetch;
