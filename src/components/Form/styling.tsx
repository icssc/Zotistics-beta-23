import { StylesConfig } from "react-select";

// https://stackoverflow.com/questions/55264659/how-do-i-figure-out-which-react-select-style-keys-map-to-which-components
export const styleDark: StylesConfig = {
  control: (base) => ({
    ...base,
    border: 0,
    backgroundColor: "#171717",
  }),
  input: (base) => ({
    ...base,
    color: "#a3a3a3",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#525252",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "#525252",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#171717",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#2684FF" : "#171717",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#545353",
    color: "#858585",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#E0E0E0",
  }),
};

export const styleLight: StylesConfig = {
  control: (base) => ({
    ...base,
    borderColor: "rgba(0, 0, 0, 0.075)",
  }),
};
