import React from "react";
import "./pill.css";

interface PillProps {
  backgroundColor?: string;
  label: string;
  styles: React.CSSProperties;
}

export default function Pill({ backgroundColor, label, styles }: PillProps) {
  return (
    <div
      className={"pill"}
      style={{ backgroundColor: backgroundColor, ...styles }}
    >
      <span className={"pill-content"}>{label}</span>
    </div>
  );
}
