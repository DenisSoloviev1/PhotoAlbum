import React from "react";
import "./Card.scss";

interface CardProps{
    photo: string;
    id: number;
    toggleModalWindow: () => void;
}

const Card: React.FC<CardProps> = ({photo, id, toggleModalWindow}) => {

    return(
        <figure>
            <img src={photo} alt={`img ${id}`} aria-hidden="true" onClick={toggleModalWindow}/>
            <p>id: {id}</p>
        </figure>
    );
}
export default Card;