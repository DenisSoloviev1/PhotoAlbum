import React from "react";
import "./ModalWindow.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";

interface ModalWindowProps {
  photo: string;
  id: number;
  show: boolean;
  handleClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  photo,
  id,
  show,
  handleClose,
}) => {
  return (
    <div className={`background ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
        <img src={photo} alt={`img ${id}`} />
        <form action="">
          <label htmlFor="">Comment</label>
          <textarea name="help text" id="1"></textarea>
          <p>Write a few sentences about the photo.</p>
          {/* вернуть сюда кнопку */}
          <CustomButton
            className="violet"
            text={"Save"}
            onClick={handleClose}
          />
        </form>
        
      </div>
    </div>
  );
};

export default ModalWindow;
