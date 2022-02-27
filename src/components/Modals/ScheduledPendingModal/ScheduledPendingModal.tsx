import { DateTime } from "luxon";
import React, { useRef } from "react";
import { Drive } from "../../../interfaces/Drive";
import Modal from "../Modal";
import { ModalProps } from "../Modal/Modal";
import styles from "./ScheduledPendingModal.module.css";
import modalStyles from "../Modal/Modal.module.css";
import Button from "../../Button";

interface ScheduleDonationModalProps extends ModalProps {
  onSubmit: (scheduledDateTime: DateTime) => void;
}

export default function ScheduleDonationModal(
  props: ScheduleDonationModalProps
) {
  const dateTimeInput = useRef<HTMLInputElement>(null);
  const now = DateTime.now().set({ second: 0, millisecond: 0 });

  return (
    <Modal {...props}>
      <div className={modalStyles["input-container"]}>
        <div>
          <label htmlFor="date" className={styles["date-label"]}>
            Date and Time
          </label>
          <input
            type="datetime-local"
            className={styles.datetime}
            defaultValue={now.toISO({
              includeOffset: false,
              suppressSeconds: true,
              suppressMilliseconds: true,
            })}
            ref={dateTimeInput}
          />
        </div>
      </div>
      <div className={modalStyles["submit-button"]}>
        <Button
          label="Schedule donation"
          onClick={() => {
            props.onSubmit(DateTime.fromISO(dateTimeInput.current?.value!));
          }}
        />
      </div>
    </Modal>
  );
}
