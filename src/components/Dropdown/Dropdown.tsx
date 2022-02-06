import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import DropdownStyles from "./DropdownStyles";
import "./dropdown.css";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  label: string;
  selected: any;
  onChange: (newValue: SingleValue<DropdownOption>) => void;
}

export default function Dropdown({
  options,
  label,
  selected,
  onChange,
}: DropdownProps) {
  return (
    <div>
      <span className={"select-label"}>{label}</span>
      <Select
        options={options}
        defaultValue={selected}
        isSearchable={false}
        styles={DropdownStyles}
        onChange={onChange}
      />
    </div>
  );
}
