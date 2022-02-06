import React from "react";
import Select from "react-select";
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
}

export default function Dropdown({
  options,
  label,
  placeHolder,
}: DropdownProps) {
  return (
    <div>
      <span className={"select-label"}>{label}</span>
      <Select
        options={options}
        isSearchable={false}
        styles={DropdownStyles}
        placeholder={placeHolder}
      />
    </div>
  );
}
