import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import "./new-donation.css";

interface Option {
  value: string;
  label: string;
}

interface NewDonationProps {
  selectOptions: Option[];
  selectLabel: string;
  selectPlaceholder: string;
  inputLabel: string;
  inputName: string;
  inputPlaceHolder: string;
}

export default function NewDonation({
  selectOptions,
  selectLabel,
  selectPlaceholder,
  inputLabel,
  inputName,
  inputPlaceHolder,
}: NewDonationProps) {
  return (
    <div className={"modal-container"}>
      <div className={"modal-title"}>New Donation</div>
      <div className={"input-container"}>
        <Input
          label={inputLabel}
          name={inputName}
          placeholder={inputPlaceHolder}
        />
      </div>
      <div className={"input-container"}>
        <Dropdown
          options={selectOptions}
          label={selectLabel}
          placeHolder={selectPlaceholder}
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
