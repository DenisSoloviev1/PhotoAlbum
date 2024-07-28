import React, { useState } from "react";
import "./MainPage.scss";
import Header from "../../widgets/Header/Header.tsx";
import Main from "../../widgets/Main/Main.tsx";
import ModalWindow from "../../widgets/ModalWindow/ModalWindow.tsx";

const MainPage: React.FC = () => {
  const photo = require("../../widgets/Main/Card/photo.png");
  const [showModalWindow, setShowModalWindow] = useState<boolean>(false);
  const toggleModalWindow = () => setShowModalWindow(!showModalWindow);

  return (
    <div className="mainPage">
      <ModalWindow
        photo={photo}
        id={1}
        show={showModalWindow}
        handleClose={toggleModalWindow}
      />
      <Header name={"Ricardo Cooper"} />
      <Main toggleModalWindow={toggleModalWindow}/>
    </div>
  );
};

export default MainPage;
