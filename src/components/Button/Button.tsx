import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return <div className={"button-container"}>{label}</div>;
}
