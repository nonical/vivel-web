import React from "react";
import "./drive-overview.css";

interface DriveOverviewProps {
  date: string;
  bloodType: string;
  pendingCount: string;
  scheduledCount: string;
  litresToGo: string;
}

export default function DriveOverview({
  date,
  bloodType,
  pendingCount,
  scheduledCount,
  litresToGo,
}: DriveOverviewProps) {
  return (
    <div className={"drive-overview-container"}>
      <div className={"drive-overview-row"}>
        <div className={"drive-overview-box drive-overview-date"}>
          <span className={"drive-overview-number"}>{date}</span>
        </div>
        <div className={"drive-overview-box drive-overview-third"}>
          <span className={"drive-overview-number"}>{bloodType}</span>
          <span className={"drive-overview-text"}>Blood type</span>
        </div>
      </div>
      <div className={"drive-overview-row"}>
        <div className={"drive-overview-box drive-overview-third"}>
          <span className={"drive-overview-number"}>{pendingCount}</span>
          <span className={"drive-overview-text"}>Pending requests</span>
        </div>
        <div className={"drive-overview-box drive-overview-third"}>
          <span className={"drive-overview-number"}>{scheduledCount}</span>
          <span className={"drive-overview-text"}>Scheduled donations</span>
        </div>
        <div className={"drive-overview-box drive-overview-third"}>
          <span className={"drive-overview-number"}>{litresToGo}L</span>
          <span className={"drive-overview-text"}>To go</span>
        </div>
      </div>
    </div>
  );
}
