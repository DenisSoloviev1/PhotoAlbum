import React from "react";
import "./Header.scss";
import imgBackgraund from "./img-bg.jpeg";

const Header: React.FC = () => {
    return(
        <header>
            <img src={imgBackgraund} alt="backgraund img" />
        </header>
    );
}

export default Header;
// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJGGTZzae7fEUfYc3aubRGtLgUrDrhXWYSONnm6QuPCJ volik97@inbox.ru