import React, { useRef } from "react";
import { useMutation } from "react-query";

import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import { DropdownOption } from "../../Dropdown";
import styles from "./DriveModal.module.css";
import modalStyles from "../Modal/Modal.module.css";
import { Drive as DriveModel } from "./actions";
import Modal from "../Modal";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";

interface DriveModalProps {
  title: string;
  buttonLabel: string;
  isOpen: boolean;
  date?: DateTime;
  bloodAmount?: number;
  bloodType?: DropdownOption;
  urgency?: boolean;
  onClose: () => void;
  mutationMethod: (body: FormData, driveId?: string) => Promise<DriveModel>;
}

export default function DriveModal(props: DriveModalProps) {
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

  const [bloodType, setBloodType] = React.useState<string | undefined>(
    props.bloodType?.value || bloodTypes[0].value
  );
  const [urgency, setUrgency] = React.useState<boolean>(props.urgency || false);

  const mutation = useMutation(async ({ formData, driveId }: any) => {
    await props.mutationMethod(formData, driveId);
  });

  const { driveId } = useParams();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
    await mutation.mutateAsync(
      { formData: data, driveId: driveId },
      {
        onSuccess: props.onClose,
      }
    );
  };

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          hidden={true}
          id={"status"}
          name={"status"}
          value={"Open"}
        />
        <input
          type="text"
          hidden={true}
          id={"hospitalId"}
          name={"hospitalId"}
          value={""}
        />
        <div className={modalStyles["input-container"]}>
          <Input
            label={"Blood amount"}
            name={"amount"}
            placeholder={"type here..."}
            defaultValue={props.bloodAmount?.toString()}
          />
        </div>
        <div className={modalStyles["input-container"]}>
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
        <div className={modalStyles["input-container"]}>
          <div>
            <label htmlFor="date" className={styles["date-label"]}>
              Date
            </label>
            <input
              type="date"
              id={"date"}
              name={"date"}
              min={DateTime.now().toISODate()}
              value={props.date?.toISODate() ?? DateTime.now().toISODate()}
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
          className={`${modalStyles["input-container"]} ${modalStyles["submit-button"]}`}
        >
          <Button label={props.buttonLabel} onClick={handleSubmit} />
        </div>
      </form>
    </Modal>
  );
}
