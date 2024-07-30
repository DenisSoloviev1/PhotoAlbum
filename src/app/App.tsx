import React from "react";
import "./App.module.scss";
import Header from "../widgets/Header/Header.tsx";
import Main from "../widgets/Main/Main.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header name={"Ricardo Cooper"} />
      <Main />
    </>
  );
};

export default App;
