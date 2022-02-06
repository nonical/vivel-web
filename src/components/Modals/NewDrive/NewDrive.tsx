import React, { useState } from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import Switch from "../../Switch";
import Button from "../../Button";
import "./new-drive.css";

export default function NewDrive() {
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
  const [bloodType, setBloodType] = React.useState<string | undefined>("");
  const [urgency, setUrgency] = React.useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target.form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"modal-container"}>
        <div className={"modal-title"}>New Drive</div>
        <div className={"input-container"}>
          <Input
            label={"Blood amount"}
            name={"bloodAmount"}
            placeholder={"type here..."}
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
            label={"Blood type"}
            placeHolder={"Select blood type"}
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
            value={urgency.toString()}
          />
          <Switch
            initChecked={false}
            onToggle={(checked) => {
              setUrgency(checked);
            }}
          />
          <span className={"switch-label"}>Urgent</span>
        </div>
        <div className={"input-container"}>
          <Button label={"Create"} onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}
