import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <input
      type="submit"
      className={styles["button-container"]}
      onClick={onClick}
      value={label}
    ></input>
  );
}
