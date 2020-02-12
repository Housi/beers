import React from "react";
import styled from "styled-components";

import useBeerApi from "./hooks/useBeerApi";
import useFavouritesList from "./hooks/useFavouritesList";
import BeerCard from "./components/BeerCard";
import UiSidePane from "./components/UiSidePane";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Pane = styled.div`
  padding: 1em;
  flex: 1;
  overflow-y: scroll;
`;

const LoadMore = styled.section`
  text-align: center;
  padding: 1em 0;
`;

const LoadMoreButton = styled.button`
  background-color: var(--theme-surfaceColor);
  border-radius: var(--theme-borderRadius);
  font: var(--theme-fontFamily);
  font-size: 2em;
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const { favourites, toggleFav, isFav } = useFavouritesList("beers");
  const { beerData, loadNextPage } = useBeerApi();

  return (
    <Wrapper>
      {beerData && (
        <Pane>
          {beerData.map(beer => (
            <BeerCard
              beer={beer}
              toggleFav={toggleFav}
              isFav={isFav}
              key={beer.id}
            />
          ))}
          <LoadMore>
            <LoadMoreButton onClick={loadNextPage}>LOAD MORE...</LoadMoreButton>
          </LoadMore>
        </Pane>
      )}
      <UiSidePane name="favourites">
        {favourites.map(beer => (
          <BeerCard
            beer={beer}
            toggleFav={toggleFav}
            isFav={isFav}
            key={beer.id}
          />
        ))}
      </UiSidePane>
    </Wrapper>
  );
}

export default App;
