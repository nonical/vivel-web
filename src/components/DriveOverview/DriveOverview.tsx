import React from "react";
import styles from "./DriveOverview.module.css";

interface DriveOverviewProps {
  date: string;
  bloodType: string;
  pendingCount: number;
  scheduledCount: number;
  litresToGo: number;
}

export default function DriveOverview({
  date,
  bloodType,
  pendingCount,
  scheduledCount,
  litresToGo,
}: DriveOverviewProps) {
  return (
    <div className={styles["drive-overview-container"]}>
      <div className={styles["drive-overview-row"]}>
        <div
          className={`${styles["drive-overview-box"]} ${styles["drive-overview-date"]}`}
        >
          <span className={styles["drive-overview-number"]}>{date}</span>
        </div>
        <div
          className={`${styles["drive-overview-box"]} ${styles["drive-overview-third"]}`}
        >
          <span className={styles["drive-overview-number"]}>{bloodType}</span>
          <span className={styles["drive-overview-text"]}>Blood type</span>
        </div>
      </div>
      <div className={styles["drive-overview-row"]}>
        <div
          className={`${styles["drive-overview-box"]} ${styles["drive-overview-third"]}`}
        >
          <span className={styles["drive-overview-number"]}>
            {pendingCount}
          </span>
          <span className={styles["drive-overview-text"]}>
            Pending requests
          </span>
        </div>
        <div
          className={`${styles["drive-overview-box"]} ${styles["drive-overview-third"]}`}
        >
          <span className={styles["drive-overview-number"]}>
            {scheduledCount}
          </span>
          <span className={styles["drive-overview-text"]}>
            Scheduled donations
          </span>
        </div>
        <div
          className={`${styles["drive-overview-box"]} ${styles["drive-overview-third"]}`}
        >
          <span className={styles["drive-overview-number"]}>{litresToGo}L</span>
          <span className={styles["drive-overview-text"]}>To go</span>
        </div>
      </div>
    </div>
  );
}
