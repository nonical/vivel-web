import React, { useState } from "react";
import { useQuery } from "react-query";

import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import { DropdownOption } from "../../Dropdown";
import styles from "./Drive.module.css";
import { toIsoDate } from "../../../utils/date";
import { postDrive } from "./actions";
import { Drive as DriveModel } from "./actions";

interface DriveProps {
  isOpen: boolean;
  date?: string;
  bloodAmount?: string;
  bloodType?: DropdownOption;
  urgency?: boolean;
}

export default function Drive(props: DriveProps) {
  const bloodTypes = [
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];

  const { title, buttonLabel } =
    Object.keys(props).length == 1
      ? { title: "New Drive", buttonLabel: "Create" }
      : { title: "Edit Drive", buttonLabel: "Update" };

  const [bloodType, setBloodType] = React.useState<string | undefined>(
    props.bloodType?.value || bloodTypes[0].value
  );
  const [urgency, setUrgency] = React.useState<boolean>(props.urgency || false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
    await postDrive(Object.fromEntries(data));
  };

  return (
    <div className={styles["modal-container"]} hidden={!props.isOpen}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          hidden={true}
          id={"hospitalId"}
          name={"hospitalId"}
          value={"c1f280c8-f8c7-4a50-9ee6-3acb906922d6"}
        />
        <div className={styles["modal-title"]}>{title}</div>
        <div className={styles["input-container"]}>
          <Input
            label={"Blood amount"}
            name={"amount"}
            placeholder={"type here..."}
            defaultValue={props.bloodAmount}
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="text"
            hidden={true}
            id={"bloodType"}
            name={"bloodType"}
            value={bloodType}
          />
          <Dropdown
            options={bloodTypes}
            selected={{ value: bloodType, label: bloodType }}
            label={"Blood type"}
            onChange={(value) => {
              setBloodType(value?.value);
            }}
          />
        </div>
        <div className={styles["input-container"]}>
          <div>
            <label htmlFor="date" className={styles["date-label"]}>
              Date
            </label>
            <input
              type="date"
              id={"date"}
              name={"date"}
              min={new Date().toISOString().split("T")[0]}
              value={props.date}
              className={styles["date-input"]}
            />
          </div>
        </div>
        <div className={styles["switch-container"]}>
          <input
            type="text"
            hidden={true}
            id={"urgency"}
            name={"urgency"}
            value={urgency?.toString()}
          />
          <Switch
            initChecked={urgency}
            title={"Urgent"}
            onToggle={(checked) => {
              setUrgency(checked);
            }}
          />
        </div>
        <div
          className={`${styles["input-container"]} ${styles["submit-button"]}`}
        >
          <Button label={buttonLabel} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
