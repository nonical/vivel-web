import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import DropdownStyles from "./DropdownStyles";
import "./dropdown.css";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  placeHolder: string;
  label: string;
  onChange: (newValue: SingleValue<Option>) => void;
}

export default function Dropdown({
  options,
  label,
  placeHolder,
  onChange,
}: DropdownProps) {
  return (
    <div>
      <span className={"select-label"}>{label}</span>
      <Select
        options={options}
        isSearchable={false}
        styles={DropdownStyles}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}
