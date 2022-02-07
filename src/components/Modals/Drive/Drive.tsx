import React, { useState } from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import { DropdownOption } from "../../Dropdown";
import "./drive.css";

interface DriveProps {
  bloodAmount?: string;
  bloodType: DropdownOption;
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
    Object.keys(props).length == 0
      ? { title: "New Drive", buttonLabel: "Create" }
      : { title: "Edit Drive", buttonLabel: "Update" };

  const [bloodType, setBloodType] = React.useState<string | undefined>(
    props.bloodType?.value || bloodTypes[0].value
  );
  const [urgency, setUrgency] = React.useState<boolean>(props.urgency || false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"modal-container"}>
        <div className={"modal-title"}>{title}</div>
        <div className={"input-container"}>
          <Input
            label={"Blood amount"}
            name={"bloodAmount"}
            placeholder={"type here..."}
            defaultValue={props.bloodAmount}
          />
        </div>
        <div className={"input-container"}>
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
        <div className={"switch-container"}>
          <input
            type="text"
            hidden={true}
            id={"urgency"}
            name={"urgency"}
            value={urgency?.toString()}
          />
          <Switch
            initChecked={urgency}
            onToggle={(checked) => {
              setUrgency(checked);
            }}
          />
          <span className={"switch-label"}>Urgent</span>
        </div>
        <div className={"input-container submit-button"}>
          <Button label={buttonLabel} onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}
