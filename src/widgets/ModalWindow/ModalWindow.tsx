import React from "react";
import "./ModalWindow.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";

interface ModalWindowProps{
    photo: string;
    id: number;
    show: boolean;
    toggleModalWindow: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({photo, id, show, toggleModalWindow}) =>{
    return(
        <div className={`background ${show ? "show" : ""}`}>
            <div className="modalWindow">
                <img src={photo} alt={`img ${id}`} />
                <form action="">
                    <label htmlFor="">Comment</label>
                    <textarea name="help text" id="1"></textarea>
                    <p>Write a few sentences about the photo.</p>
                    <CustomButton className="violet" text={"Save"} onClick={toggleModalWindow}/>
                </form>
            </div>
        </div>
    );
}

export default ModalWindow;