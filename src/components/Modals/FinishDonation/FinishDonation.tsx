import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Button from "../../Button";
import "./finish-donation.css";

export default function FinishDonation() {
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
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"modal-container"}>
        <div className={"modal-title"}>Finish Donation</div>
        <div className={"finish-input-container"}>
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
            <div className={"finish-input-container"}>
              <Input
                label={"Leukocyte Count (ccm)"}
                name={"leukocyteCount"}
                placeholder={"6,000"}
              />
            </div>
            <div className={"finish-input-container"}>
              <Input
                label={"Erythrocyte Count (ccm)"}
                name={"erythrocyteCount"}
                placeholder={"4,520,000"}
              />
            </div>
            <div className={"finish-input-container"}>
              <Input
                label={"Platelet Count (ml)"}
                name={"plateletCount"}
                placeholder={"329,000"}
              />
            </div>
          </>
        )}
        {donationStatus != donationStatuses[0].value && <></>}
        <div className={"finish-input-container"}>
          <Button label={"Finish Donation"} onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}
