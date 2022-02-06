import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Button from "../../Button";
import "./finish-donation.css";

export default function FinishDonation() {
  const options = [
    { value: "Successful", label: "Successful" },
    { value: "Failed", label: "Failed" },
    { value: "Canceled", label: "Canceled" },
  ];
  return (
    <div className={"modal-container"}>
      <div className={"modal-title"}>Finish Donation</div>
      <div className={"finish-input-container"}>
        <Dropdown
          options={options}
          label={"Status"}
          placeHolder={"Select donation status"}
        />
      </div>
      <div className={"finish-input-container"}>
        <Input
          label={"Leukocyte Count (ccm)"}
          name={"leukocytes"}
          placeholder={"6,000"}
        />
      </div>
      <div className={"finish-input-container"}>
        <Input
          label={"Erythrocyte Count (ccm)"}
          name={"erythrocytes"}
          placeholder={"4,520,000"}
        />
      </div>
      <div className={"finish-input-container"}>
        <Input
          label={"Platelet Count (ml)"}
          name={"platelets"}
          placeholder={"329,000"}
        />
      </div>
      <div className={"finish-input-container"}>
        <Button label={"Finish Donation"} />
      </div>
    </div>
  );
}
