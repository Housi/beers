import React from "react";
import styled from "styled-components";
import UiStats from "./UiStats";
import UiIcon from "./UiIcon";

const Card = styled.div`
  display: inline-block;
  width: 240px;
  margin: 8px;
  background-color: var(--theme-surfaceColor);
  border-radius: var(--theme-borderRadius);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CardHeader = styled.div`
  font-size: 1.4em;
  margin: 10px 10px 14px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: underline wavy var(--theme-accentColor);
`;

const CardBody = styled.div`
  display: flex;
`;

const BeerImage = styled.img`
  flex: 1 100%;
  height: 220px;
  object-fit: contain;
`;

const StarButton = styled.div`
  font-size: 2em;
  path {
    fill: var(--theme-accentColor);
  }
  &:hover {
    cursor: pointer;
  }
`;

const BeerCard = ({ beer, toggleFav, isFav }) => {
  const { name, image_url, stats } = beer;
  const iconName = () => (isFav(beer) ? "starFull" : "starEmpty");
  const FavButton = () => (
    <StarButton onClick={() => toggleFav(beer)}>
      <UiIcon name={iconName()} />
    </StarButton>
  );
  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <BeerImage src={image_url} alt={name} />
        <UiStats stats={stats}>{FavButton()}</UiStats>
      </CardBody>
    </Card>
  );
};

export default BeerCard;
