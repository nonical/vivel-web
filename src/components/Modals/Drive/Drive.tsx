import React, { useRef } from "react";
import { useMutation } from "react-query";

import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import { DropdownOption } from "../../Dropdown";
import styles from "./Drive.module.css";
import { postDrive } from "./actions";
import { Drive as DriveModel } from "./actions";

interface DriveProps {
  isOpen: boolean;
  hospitalId?: string;
  date?: string;
  bloodAmount?: string;
  bloodType?: DropdownOption;
  urgency?: boolean;
  onClose: () => void;
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
    Object.keys(props).length == 3
      ? { title: "New Drive", buttonLabel: "Create" }
      : { title: "Edit Drive", buttonLabel: "Update" };

  const [bloodType, setBloodType] = React.useState<string | undefined>(
    props.bloodType?.value || bloodTypes[0].value
  );
  const [urgency, setUrgency] = React.useState<boolean>(props.urgency || false);

  const mutation = useMutation(async (data: FormData) => {
    const body: DriveModel = {
      bloodType: data.get("bloodType") as string,
      hospitalId: data.get("hospitalId") as string,
      date: data.get("date") as string,
      amount: parseInt(data.get("amount") as string),
      urgency: (data.get("urgency") as string) == "true",
    };

    await postDrive(body);
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const hideModal = () => {
    containerRef.current!.hidden = true;
    props.onClose();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
    await mutation.mutateAsync(data, {
      onSuccess: hideModal,
    });
  };

  return (
    <div
      ref={containerRef}
      className={styles["modal-container"]}
      hidden={!props.isOpen}
      onClick={(event) => {
        if (event.target == containerRef.current) hideModal();
      }}
    >
      <form onSubmit={handleSubmit} className={styles["form-container"]}>
        <input
          type="text"
          hidden={true}
          id={"hospitalId"}
          name={"hospitalId"}
          value={props.hospitalId}
        />
        <div className={styles["modal-title-container"]}>
          <span>{title}</span>
          <span className={styles["modal-close-button"]} onClick={hideModal}>
            &times;
          </span>
        </div>
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
