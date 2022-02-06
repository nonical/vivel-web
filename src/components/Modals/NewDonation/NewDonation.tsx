import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import "./new-donation.css";

export default function NewDonation() {
  const options = [
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];
  return (
    <div className={"modal-container"}>
      <div className={"modal-title"}>New Donation</div>
      <div className={"input-container"}>
        <Input
          label={"Blood amount"}
          name={"blood-amount"}
          placeholder={"type here..."}
        />
      </div>
      <div className={"input-container"}>
        <Dropdown
          options={options}
          label={"Blood type"}
          placeHolder={"Select blood type"}
        />
      </div>
      <div className={"switch-container"}>
        <Switch initChecked={false} />
        <span className={"switch-label"}>Urgent</span>
      </div>
      <div className={"input-container"}>
        <Button label={"Create"} />
      </div>
    </div>
  );
}
