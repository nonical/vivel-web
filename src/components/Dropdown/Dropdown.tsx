import React from "react";
import Select from "react-select";
import DropdownStyles from "./DropdownStyles";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  placeHolder: string;
}

export default function Dropdown({ options, placeHolder }: DropdownProps) {
  return (
    <Select
      options={options}
      isSearchable={false}
      styles={DropdownStyles}
      placeholder={placeHolder}
    />
  );
}
