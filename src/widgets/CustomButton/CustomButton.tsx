import React from "react";
import classNames from "classnames";
import classes from "./CustomButton.module.scss";

interface CustomButtonProps {
  className?: string;
  text: string;
  svg?: JSX.Element;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, text, svg, onClick }) => {
  return (
    <button className={classNames(classes.button, className && classes[className])} onClick={onClick}>
      {svg}
      {text}
    </button>
  );
};

export default CustomButton;
