import React, { useEffect, useRef, useState } from "react";
import styles from "./Switch.module.css";

interface SwitchProps {
  initChecked: boolean;
  title: string;
  onToggle?: (checked: boolean) => void;
}

export default function Switch({ initChecked, title, onToggle }: SwitchProps) {
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
    <>
      <div className={styles["bounding-box"]}>
        <div
          className={styles["switch-body"]}
          onClick={() => {
            setChecked(!checked);
            if (onToggle) onToggle(!checked);
          }}
        >
          <div ref={oval} className={styles.oval} />
        </div>
      </div>
      <span
        style={{
          marginLeft: 10,
          marginRight: 25,
        }}
      >
        {title}
      </span>
    </>
  );
}
