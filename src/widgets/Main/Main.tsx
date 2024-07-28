import React from "react";
import "./Main.scss";
import Card from "./Card/Card.tsx";

interface MainProps{
  toggleModalWindow: () => void;
}

const Main: React.FC<MainProps> = ({toggleModalWindow}) => {
  const photo = require("./Card/photo.png");

  return (
    <main>
      <section>
        <Card photo={photo} id={1} toggleModalWindow={toggleModalWindow}/>
        <Card photo={photo} id={2} toggleModalWindow={toggleModalWindow}/>
        <Card photo={photo} id={3} toggleModalWindow={toggleModalWindow}/>
        <Card photo={photo} id={4} toggleModalWindow={toggleModalWindow}/>
        <Card photo={photo} id={5} toggleModalWindow={toggleModalWindow}/>
        <Card photo={photo} id={6} toggleModalWindow={toggleModalWindow}/>
      </section>
    </main>
  );
};

export default Main;
