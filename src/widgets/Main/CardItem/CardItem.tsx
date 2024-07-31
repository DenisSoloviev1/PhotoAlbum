import React from "react";
import classes from "./CardItem.module.scss";

interface CardItemProps {
  id: number;
  url: string;
  onPhotoClick: (id: number, url: string) => void;
}

const CardItem: React.FC<CardItemProps> = ({ id, url, onPhotoClick }) => {
  return (
    <figure className={classes.cardItem}>
      <img src={url} alt={`Img ${id}`} onClick={() => onPhotoClick(id, url)} />
      <p>id: {id}</p>
    </figure>
  );
};

export default CardItem;
