import React from "react";
import Pill from "../Pill";
import Action from "../Action";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as PieChart } from "../../assets/pie-chart.svg";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  hospitalName: string;
}

export default function Navbar({ hospitalName }: NavbarProps) {
  const currentScreen = (location: string) => {
    return window.location.pathname.includes(location);
  };

  return (
    <div className={styles.container}>
      <div className={styles["pill-container"]}>
        <Pill
          backgroundColor="#FF98A8"
          label={hospitalName}
          styles={{ marginLeft: 20 }}
        ></Pill>
      </div>
      <div className={styles.actions}>
        <Link to="/drives" style={{ textDecoration: "none" }}>
          <Action
            Icon={Heart}
            iconStyles={{
              stroke: currentScreen("/drives") ? "#FF98A8" : "#999999",
              marginRight: 5,
            }}
            title={"Drives"}
          />
        </Link>
        <Link to="/drives" style={{ textDecoration: "none" }}>
          <Action
            Icon={PieChart}
            iconStyles={{
              stroke: currentScreen("/reports") ? "#FF98A8" : "#999999",
              marginRight: 5,
            }}
            title={"Reports"}
          />
        </Link>
      </div>
    </div>
  );
}
