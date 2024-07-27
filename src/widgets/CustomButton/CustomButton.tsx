import React from "react";
import "./CustomButton.scss";

interface CustomButtonProps {
  className?: string;
  text: string;
  svg?: JSX.Element;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, text, svg, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {svg}
      {text}
    </button>
  );
};

export default CustomButton;
