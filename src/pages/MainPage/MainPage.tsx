import React from "react";
import "./MainPage.scss";
import Header from "../../widgets/Header/Header.tsx";
import Main from "../../widgets/Main/Main.tsx";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default MainPage;