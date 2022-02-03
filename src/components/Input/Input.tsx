import React from "react";
import "./input.css";

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
    <div className="main">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
