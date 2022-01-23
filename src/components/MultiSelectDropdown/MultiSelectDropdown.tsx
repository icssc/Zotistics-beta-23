import { Dispatch, useContext } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeContext";
import { SingleValue } from "react-select";
import AsyncSelect from "react-select/async";
import fuzzysort from "fuzzysort";

interface Option {
  value: string;
  label: string;
}

let options: Option[];

const filterOptions = (inputValue: string) =>
  fuzzysort.goAsync(inputValue, options, { key: "value" });

// Referencing tailwindcss styles in js would increase package size.
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
// https://github.com/vercel/next.js/discussions/31841
const colorsDark = {
  neutral0: "#171717", // neutral-900 background
  neutral20: "#525252", // neutral-600 border
  neutral80: "#ffffff", // selected option text
  primary: "#3b82f6", // blue-500 focused
  primary25: "#1e40af", // blue-800 option hover
};
const colorsLight = {
  neutral20: "#a3a3a3", // neutral-400 border
  primary: "#3b82f6", // blue-500 focused
  primary25: "#dbeafe", // blue-100 option hover
};

interface MultiSelectDropdownProps {
  id: string;
  label: string;
  endpoint: string;
  value?: Option;
  setValue: Dispatch<any>;
}

const MultiSelectDropdown = ({
  id,
  label,
  endpoint,
  value,
  setValue,
}: MultiSelectDropdownProps) => {
  const loadOptions = async (inputValue: string) => {
    if (!options) {
      const response = await fetch(endpoint);
      const data: string[] = await response.json();
      options = data.map((option) => ({ value: option, label: option }));
      return options;
    }
    return (await filterOptions(inputValue)).map((option) => option.obj);
  };

  const handleChange = (value: SingleValue<Option>) => {
    setValue(value);
  };

  const { colorScheme } = useContext(ColorSchemeContext);
  const colors = colorScheme === "dark" ? colorsDark : colorsLight;

  return (
    <div>
      <label
        htmlFor={`react-select-${id}-input`}
        className="block mb-2 dark:text-white"
      >
        {label}
      </label>
      <AsyncSelect
        className="dark:text-white"
        id={id}
        instanceId={id}
        isClearable
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={handleChange}
        value={value}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            ...colors,
          },
        })}
      />
    </div>
  );
};

export default MultiSelectDropdown;
