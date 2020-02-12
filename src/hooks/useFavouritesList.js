import { useState, useEffect } from "react";
import store from "store";

function useFavouritesList() {
  const initialState = store.get("favourites") ? store.get("favourites") : [];
  const [favourites, setItems] = useState(initialState);

  useEffect(() => {
    store.set("favourites", favourites);
  }, [favourites]);

  const excludeFilter = id => item => item["id"] !== id;
  const includeFilter = id => item => item["id"] === id;

  const add = item => setItems(favourites => [...favourites, item]);

  const remove = id =>
    setItems(favourites => favourites.filter(excludeFilter(id)));

  const isFav = item => favourites.filter(includeFilter(item.id)).length;

  const toggleFav = item => (isFav(item) ? remove(item.id) : add(item));

  return { favourites, toggleFav, isFav };
}

export default useFavouritesList;
