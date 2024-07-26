import React from 'react';
import './App.scss';
import Header from "../widgets/Header/Header.tsx";
import Main from "../widgets/Main/Main.tsx";

const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Main/>
    </>
  );
}

export default App;
