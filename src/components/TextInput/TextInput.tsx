import React from "react";
import "./TextInput.module.css";
import styles from "../Input/Input.module.css";

interface TextInputProps {
  label?: string;
  name: string;
  placeholder?: string;
}

export default function TextInput({
  label,
  name,
  placeholder,
}: TextInputProps) {
  return (
    <div className={styles.main}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea id={name} name={name} placeholder={placeholder} />
    </div>
  );
}
