import React, { useRef } from "react";
import { useMutation } from "react-query";

import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import { DropdownOption } from "../../Dropdown";
import styles from "../DriveModal/DriveModal.module.css";
import modalStyles from "../Modal/Modal.module.css";
// import { Drive as DriveModel } from "./actions";
import Modal from "../Modal";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import { toast } from "react-toastify";
import { displayErrors, displaySuccess } from "../../../utils/toast";
import { bloodTypes } from "../../../constants/constants";

interface DriveReportModalProps {
  title: string;
  buttonLabel: string;
  isOpen: boolean;
  onClose: () => void;
  mutationMethod: (body: FormData, hospitalId: string) => {};
}

const driveStatuses = [
    {value: "All", label: "All"},
    {value: "Open", label: "Open"},
    {value: "Closed", label: "Closed"}
]

const urgencyStatuses = [
    {value: "All", label: "All"},
    {value: "Routine", label: "Routine"},
    {value: "Urgent", label: "Urgent"}
]

export default function DriveReportModal(props: DriveReportModalProps) {
    const [driveStatus, setDriveStatus] = React.useState<string | undefined>(
        driveStatuses[0].value
      );

      const [urgencyStatus, setUrgencyStatus] = React.useState<string | undefined>(
        urgencyStatuses[0].value
      );

      const mutation = useMutation(async ({ formData, hospitalId }: any) => {
        await props.mutationMethod(formData, hospitalId);
      });

      const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = new FormData(e.target.form);
        await mutation.mutateAsync(
          // TODO: add hospitalid
          { formData: data, hospitalId: "" },
          {
            onSuccess: () => {
              props.onClose();
            },
            onError: (error: any) => {
              displayErrors(error);
            },
          }
        );
      };

  return (
    <Modal {...props}>
      <form>
        <div className={modalStyles["input-container"]}>
          <div>
            <label htmlFor="from" className={styles["date-label"]}>
              From
            </label>
            <input
              type="date"
              id={"from"}
              name={"from"}
              max={DateTime.now().toISODate()}
              className={styles["date-input"]}
            />
          </div>
        </div>
        <div className={modalStyles["input-container"]}>
          <div>
            <label htmlFor="to" className={styles["date-label"]}>
              To
            </label>
            <input
              type="date"
              id={"to"}
              name={"to"}
              max={DateTime.now().toISODate()}
              className={styles["date-input"]}
            />
          </div>
        </div>
        <div className={modalStyles["input-container"]}>
          <input
            type="text"
            hidden={true}
            id={"status"}
            name={"status"}
            value={driveStatus}
          />
          <Dropdown
            options={driveStatuses}
            selected={driveStatuses[0]}
            label={"Status"}
            onChange={(value) => {
              setDriveStatus(value?.value);
            }}
          />
        </div>
        <div className={modalStyles["input-container"]}>
          <input
            type="text"
            hidden={true}
            id={"urgency"}
            name={"urgency"}
            value={urgencyStatus}
          />
          <Dropdown
            options={urgencyStatuses}
            selected={urgencyStatuses[0]}
            label={"Urgency"}
            onChange={(value) => {
              setUrgencyStatus(value?.value);
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
