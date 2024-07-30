import React, { useState } from "react";
import "./Main.module.scss";
import PhotoList from "./PhotoList/PhotoList.tsx";
import ModalWindow from "../ModalWindow/ModalWindow.tsx";

const Main: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlePhotoClick = (id: number, url: string) => {
    setSelectedId(id);
    setSelectedPhoto(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setSelectedId(null);
    setShowModal(false);
  };

  return (
    <main >
      <PhotoList onPhotoClick={handlePhotoClick} />
      {showModal && selectedPhoto && selectedId && (
        <ModalWindow
          id={selectedId}
          show={showModal}
          handleClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default Main;
