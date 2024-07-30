import React from "react";
import classes from "./ModalWindow.module.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";
import useFetchData from "../../API/useFetchData.tsx";
import CommentList from "../Main/CommentList/CommentList.tsx";
import Loader from "../Loader/Loader.tsx";

interface Comment {
  id: number;
  text: string;
}

interface PhotoDetails {
  id: number;
  image: string;
  comments: Comment[];
}

interface ModalWindowProps {
  id: number;
  show: boolean;
  handleClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ id, show, handleClose }) => {
  const url = `http://test-backend.itdelta.agency/api/image/${id}`;
  const { data, loading, error } = useFetchData<PhotoDetails>(url);

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ""}`}
      onClick={handleClose}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <img src={data?.image} alt={`img ${id}`} />
        <form action="">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment"></textarea>
          <p>Write a few sentences about the photo.</p>
          <CustomButton className="violet" text="Save" onClick={handleClose} />
        </form>
        {data && <CommentList comments={data.comments} />}
      </div>
    </div>
  );
};

export default ModalWindow;
