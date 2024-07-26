import React from "react";
import "./Card.scss";

interface CardProps{
    photo: string;
}

const Card: React.FC<CardProps> = ({photo}) => {

    return(
        <figure>
            <img src={photo} alt="" />
        </figure>
    );
}