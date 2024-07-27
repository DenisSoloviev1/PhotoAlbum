import React from "react";
import "./Card.scss";

interface CardProps{
    photo: string;
    id: number;
}

const Card: React.FC<CardProps> = ({photo, id}) => {

    return(
        <figure>
            <img src={photo} alt={`img ${id}`} />
            <p>id: {id}</p>
        </figure>
    );
}
export default Card;