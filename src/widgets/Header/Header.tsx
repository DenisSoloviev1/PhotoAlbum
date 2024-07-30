import React from "react";
import classes from "./Header.module.scss";
import Avatar from "./Avatar/Avatar.tsx";
import CustomButton from "../CustomButton/CustomButton.tsx";
import { Message, Call } from "../../shared/svg.module.tsx";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const avatar = require("./Avatar/avatar.jpg");
  const openClick = (to: string): void => {
    window.open(to, "_blank");
  };

  return (
    <header>
      <div className={classes.picture}></div>
      <div className={classes.bio}>
        <Avatar image={avatar} />
        <div className={classes.info}>
          <h1>{name}</h1>
          <div className={classes.buttons}>
            <CustomButton
              svg={<Message />}
              text={"Message"}
              onClick={() => openClick("mailto:ex@mail.com")}
            />
            <CustomButton
              svg={<Call />}
              text={"Call"}
              onClick={() => openClick("tel:89998880909")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
