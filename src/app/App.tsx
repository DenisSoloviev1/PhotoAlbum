import React, { useState } from "react";
import "./App.module.scss";
import Header from "../widgets/Header/Header.tsx";
import Main from "../widgets/Main/Main.tsx";
import ModalWindow from "../widgets/ModalWindow/ModalWindow.tsx";

const App: React.FC = () => {
  const photo = require("../widgets/Main/Card/photo.png");
  const [showModalWindow, setShowModalWindow] = useState<boolean>(false);
  const toggleModalWindow = () => setShowModalWindow(!showModalWindow);

  return (
    <>
      <Header name={"Ricardo Cooper"} />
      <Main toggleModalWindow={toggleModalWindow} />
      <ModalWindow
        photo={photo}
        id={1}
        show={showModalWindow}
        handleClose={toggleModalWindow}
      />
    </>
  );
};
export default App;
