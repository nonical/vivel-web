import React from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as PieChart } from "../../assets/pie-chart.svg";
import { useAuth } from "../../contexts/Auth";
import Action from "../Action";
import Pill from "../Pill";
import { fetchHospital } from "./actions";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const location = useLocation();
  const { logout } = useAuth();

  const currentScreen = (path: string) => {
    return location.pathname.includes(path);
  };

  const { data: hospital } = useQuery(["hospital"], async () => {
    return fetchHospital();
  });

  return (
    <div className={styles.container}>
      <div className={styles["pill-container"]}>
        <Pill
          backgroundColor="#FF98A8"
          label={hospital?.name!}
          styles={{ marginLeft: 20 }}
        ></Pill>
      </div>
      <div className={styles.actions}>
        <Link to="/drives" className={styles.link}>
          <Action
            Icon={Heart}
            iconStyles={{
              stroke: currentScreen("/drives") ? "#FF98A8" : "#999999",
              marginRight: 5,
            }}
            title={"Drives"}
          />
        </Link>
        <Link to="/reports" className={styles.link}>
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
      <div className={styles.logout}>
        <p style={{ cursor: "pointer" }} onClick={logout}>
          Log out
        </p>
      </div>
    </div>
  );
}
