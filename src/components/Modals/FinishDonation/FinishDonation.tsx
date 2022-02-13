import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Button from "../../Button";
import TextInput from "../../TextInput";

import styles from "../Modal/Modal.module.css";
import Modal from "../Modal";

interface DonationModalProps {
  title: string;
  isOpen: boolean;
  donationId: string;
  onClose: () => void;
}

export default function FinishDonation(props: DonationModalProps) {
  const donationStatuses = [
    { value: "Successful", label: "Successful" },
    { value: "Failed", label: "Failed" },
    { value: "Canceled", label: "Canceled" },
  ];

  const [donationStatus, setdonationStatus] = React.useState<
    string | undefined
  >(donationStatuses[0].value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
  };

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          hidden={true}
          id={"donationId"}
          name={"donationId"}
          value={props.donationId}
        />
        <div className={styles["input-container"]}>
          <input
            type="text"
            hidden={true}
            id={"status"}
            name={"status"}
            value={donationStatus}
          />
          <Dropdown
            options={donationStatuses}
            label={"Status"}
            selected={donationStatuses[0]}
            onChange={(value) => {
              setdonationStatus(value?.value);
            }}
          />
        </div>
        {donationStatus == donationStatuses[0].value && (
          <>
            <div className={styles["input-container"]}>
              <Input
                label={"Leukocyte Count (ccm)"}
                name={"leukocyteCount"}
                placeholder={"6,000"}
              />
            </div>
            <div className={styles["input-container"]}>
              <Input
                label={"Erythrocyte Count (ccm)"}
                name={"erythrocyteCount"}
                placeholder={"4,520,000"}
              />
            </div>
            <div className={styles["input-container"]}>
              <Input
                label={"Platelet Count (ml)"}
                name={"plateletCount"}
                placeholder={"329,000"}
              />
            </div>
          </>
        )}
        {donationStatus != donationStatuses[0].value && (
          <div className={styles["input-container"]}>
            <TextInput
              label={"Note"}
              name={"note"}
              placeholder={"Enter note here..."}
            />
          </div>
        )}
        <div
          className={`${styles["input-container"]} ${styles["submit-button"]}`}
        >
          <Button label={"Finish Donation"} onClick={handleSubmit} />
        </div>
      </form>
    </Modal>
  );
}
