import React from "react";
import style from "./Pill.module.css";

interface PillProps {
  backgroundColor?: string;
  label: string;
  styles: React.CSSProperties;
}

export default function Pill({ backgroundColor, label, styles }: PillProps) {
  return (
    <div
      className={style.pill}
      style={{ backgroundColor: backgroundColor, ...styles }}
    >
      <span className={style["pill-content"]}>{label}</span>
    </div>
  );
}
