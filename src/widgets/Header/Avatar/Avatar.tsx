import React from "react";
import "./Avatar.scss";

interface AvatarProps{
    image: string;
}

const Avatar: React.FC<AvatarProps> = ({image}) =>{
    return(
        <div className="avatar">
            <img src={image} alt="avatar" />
        </div>
    );
}

export default Avatar;