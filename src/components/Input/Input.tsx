import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

export default function Input({
  label,
  name,
  placeholder,
  defaultValue,
}: InputProps) {
  return (
    <div className={styles.main}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
