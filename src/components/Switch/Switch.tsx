import React, { useEffect, useRef, useState } from "react";
import "./switch.css";

interface SwitchProps {
  initChecked: Boolean;
  onToggle?: (checked: boolean) => void;
}

export default function Switch({ initChecked, onToggle }: SwitchProps) {
  const [checked, setChecked] = useState(initChecked);
  const oval = useRef<HTMLDivElement>(null);

  function toggleOval(div: HTMLDivElement) {
    if (checked) {
      div.style.background = "#ff647c";
      div.style.left = "45.83%";
      div.style.right = "4.17%";
    } else {
      div.style.background = "#e4e4e4";
      div.style.left = "4.35%";
      div.style.right = "45.65%";
    }
  }

  useEffect(() => {
    if (oval.current != null) toggleOval(oval.current);
  }, [checked]);

  return (
    <div className="bounding-box">
      <div
        className="switch-body"
        onClick={() => {
          setChecked(!checked);
          if (onToggle) onToggle(!checked);
        }}
      >
        <div ref={oval} className="oval" />
      </div>
    </div>
  );
}
