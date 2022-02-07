import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <input
      type="submit"
      className={"button-container"}
      onClick={onClick}
      value={label}
    ></input>
  );
}
