const DropdownStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: "#FF98A8",
    boxShadow: "0",
    "&:hover": {
      borderColor: "#FF98A8",
    },
    color: "#FF98A8",
    minHeight: "50px",
  }),
  option: (provided: any, state: { isSelected: any }) => ({
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
  listBox: (provided: any, state: any) => ({
    ...provided,
    margin: 0,
  }),
  menuList: (provided: any, state: any) => ({
    ...provided,
    padding: 0,
    borderColor: "#FF98A8",
    boxShadow: "0px 4px 8px 0 rgba(50, 50, 71, 0.15)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "#FF98A8",
  }),
  container: (provided: any, state: any) => ({
    ...provided,
    minWidth: "325px",
    minHeight: "50px",
  }),
};

export default DropdownStyles;
