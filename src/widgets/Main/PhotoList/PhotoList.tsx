import React from "react";
import useFetchPhotos from "../API.tsx";
import CardItem from "../CardItem/CardItem.tsx";
import "./PhotoList.module.scss";

interface PhotoListProps {
  onPhotoClick: (id: number, image: string) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ onPhotoClick }) => {
  const url = "http://test-backend.itdelta.agency/api/images";
  const { data, loading, error } = useFetchPhotos(url);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section>
      {data.map((item) => (
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
