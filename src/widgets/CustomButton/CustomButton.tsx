import React from "react";
import "./CustomButton.scss";

interface CustomButtonProps {
  text: string;
  svg?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, svg }) => {
  return (
    <button>
      {svg}
      {text}
    </button>
  );
};

export default CustomButton;
