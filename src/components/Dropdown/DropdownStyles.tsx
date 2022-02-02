const DropdownStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: "#FF98A8",
    boxShadow: "0",
    "&:hover": {
      borderColor: "#FF98A8",
    },
    color: "#FF98A8",
  }),
  option: (provided, state) => ({
    ...provided,
    "&:hover": {
      color: "#FF98A8",
      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
      "&:last-child": {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      },
    },
    backgroundColor: "#FFFFFF",
    color: state.isSelected ? "#FF98A8" : "",
    borderRadius: 4,
  }),
  listBox: (provided, state) => ({
    ...provided,
    margin: 0,
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
    borderColor: "#FF98A8",
    boxShadow: "0px 4px 8px 0 rgba(50, 50, 71, 0.15)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#FF98A8",
  }),
};

export default DropdownStyles;
