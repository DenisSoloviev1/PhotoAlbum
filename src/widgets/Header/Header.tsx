import React from "react";
import "./Header.scss";
import Avatar from "./Avatar/Avatar.tsx";
import CustomButton from "../CustomButton/CustomButton.tsx";

interface HeaderProps{
  name: string;
  toggleModalWindow: () => void;
}

const Header: React.FC<HeaderProps> = ({name, toggleModalWindow}) => {
  const imgBackgraund = require("./img-bg.jpg");
  const avatar = require("./Avatar/avatar.jpg");

  return (
    <header>
      <img src={imgBackgraund} alt="backgraund img" />
      <div className="bio">
        <Avatar image={avatar} />
        <div className="info">
          <h1>{name}</h1>
          <div className="buttons">
            <CustomButton
              svg={
                <svg viewBox="0 0 512 512">
                  <g>
                    <g>
                      <g>
                        <path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646 c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719 C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z" />
                        <path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885 c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542 C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333 v-268.25C512,132.927,509.583,129.146,505.813,127.406z" />
                      </g>
                    </g>
                  </g>
                </svg>
              }
              text={"Message"}
              onClick={toggleModalWindow}
            />
            <CustomButton
              svg={
                <svg viewBox="0 0 384 384">
                  <g>
                    <g>
                      <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594 c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448 c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813 C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z" />
                    </g>
                  </g>
                </svg>
              }
              text={"Call"}
              onClick={toggleModalWindow}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
