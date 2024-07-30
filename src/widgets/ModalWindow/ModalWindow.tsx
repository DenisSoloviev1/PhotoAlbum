import React from "react";
import classes from "./ModalWindow.module.scss";
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
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ""}`}
      onClick={handleClose}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <img src={photo} alt={`img ${id}`} />
        <form action="">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment"></textarea>
          <p>Write a few sentences about the photo.</p>
          <CustomButton
            className="violet"
            text="Save"
            onClick={handleClose}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
