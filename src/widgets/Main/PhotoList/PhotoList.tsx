import React from "react";
import useFetchData from "../../../API/useFetchData.tsx";
import CardItem from "../CardItem/CardItem.tsx";
import classes from "./PhotoList.module.scss";
import Loader from "../../Loader/Loader.tsx";

interface PhotoListProps {
  onPhotoClick: (id: number, url: string) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ onPhotoClick }) => {
  const url = "http://test-backend.itdelta.agency/api/images";
  const { data, loading, error } = useFetchData<{ id: number; image: string }[]>(url);

  if (loading) return <Loader/>;
  if (error) return <p className={classes.message}>Ошибка: {error}</p>;

  return (
    <section className={classes.photoList}>
      {data?.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          url={item.image}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </section>
  );
};

export default PhotoList;

