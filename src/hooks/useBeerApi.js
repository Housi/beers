import { useState, useEffect } from "react";
import client from "../data/client";

const useBeerApi = () => {
  const [beerData, setBeerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadNextPage = () => setPage(page + 1);

  async function fetchData(page) {
    setLoading(true);
    const { data } = await client.get("beers", {
      params: { page: page, per_page: 10 }
    });
    const formatted = data.map(({ id, name, image_url, abv, ibu, ebc }) => ({
      id,
      name,
      image_url,
      stats: { abv, ibu, ebc }
    }));
    setBeerData(beerData => [...beerData, ...formatted]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return { loading, beerData, loadNextPage };
};

export default useBeerApi;
