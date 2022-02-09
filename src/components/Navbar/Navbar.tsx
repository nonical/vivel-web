import React from "react";
import Pill from "../Pill";
import Action from "../Action";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as PieChart } from "../../assets/pie-chart.svg";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles["pill-container"]}>
        <Pill
          backgroundColor="#FF98A8"
          label="DZ Hospital"
          styles={{ marginLeft: 20 }}
        ></Pill>
      </div>
      <div className={styles.actions}>
        <Action
          Icon={Heart}
          iconStyles={{ stroke: "#FF98A8", marginRight: 5 }}
          title={"Drives"}
          onClick={() => {
            alert("hewwo");
          }}
        />
        <Action
          Icon={PieChart}
          iconStyles={{ stroke: "#FF98A8", marginRight: 5 }}
          title={"Reports"}
          onClick={() => {
            alert("hewwo");
          }}
        />
      </div>
    </div>
  );
}
