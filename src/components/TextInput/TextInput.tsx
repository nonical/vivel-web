import React from "react";
import "./text-input.css";

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
    <div className="main">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea id={name} name={name} placeholder={placeholder} />
    </div>
  );
}
