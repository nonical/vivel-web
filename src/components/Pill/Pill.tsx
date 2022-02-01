import React from "react";
import "./pill.css";

interface PillProps {
  backgroundColor?: string;
  label: string;
}

export const Pill = ({ backgroundColor, label }: PillProps) => {
  return (
    <div className={"pill"} style={{ backgroundColor: backgroundColor }}>
      <span className={"pill-content"}>{label}</span>
    </div>
  );
};
