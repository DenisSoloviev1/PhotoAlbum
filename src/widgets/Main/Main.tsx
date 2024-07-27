import React from "react";
import "./Main.scss";
import Card from "./Card/Card.tsx";

const Main: React.FC = () => {
  const photo = require("./Card/photo.png");

  return (
    <main>
      <section>
        <Card photo={photo} id={1}/>
        <Card photo={photo} id={2}/>
        <Card photo={photo} id={3}/>
        <Card photo={photo} id={4}/>
        <Card photo={photo} id={5}/>
        <Card photo={photo} id={6}/>
      </section>
    </main>
  );
};

export default Main;
