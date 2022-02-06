import { useContext, useState } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeContext";
import { StylesConfig } from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";
import fuzzysort from "fuzzysort";

import { Option } from "src/types/index";

// Referencing tailwindcss styles in js would increase package size.
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
// https://github.com/vercel/next.js/discussions/31841
const colorsDark = {
  neutral0: "#171717", // neutral-900 background
  neutral80: "#ffffff", // selected option text
  primary: "#3b82f6", // blue-500 focused
  primary25: "#1e40af", // blue-800 option hover
};
const colorsLight = {
  primary: "#3b82f6", // blue-500 focused
  primary25: "#dbeafe", // blue-100 option hover
};

const styleDark = {
  border: 0,
}
const styleLight = {
  borderColor: "rgba(0, 0, 0, 0.075)",
}

interface MultiSelectDropdownProps {
  id: string;
  label: string;
  endpoint?: string;
  value: Option[];
  setValue: (value: Option[]) => void;
}

const MultiSelectDropdown = ({
  id,
  label,
  endpoint,
  value,
  setValue,
}: MultiSelectDropdownProps) => {
  const [options, setOptions] = useState<Option[]>([]);

  const { colorScheme } = useContext(ColorSchemeContext);
  const colors = colorScheme === "dark" ? colorsDark : colorsLight;
  const styles = colorScheme === "dark" ? styleDark : styleLight

  const filterOptions = (inputValue: string, options: (Option | undefined)[]) =>
    fuzzysort.goAsync(inputValue, options, { key: "value" });

  const loadOptions = async (inputValue: string) => {
    if (endpoint && !options.length) {
      const response = await fetch(endpoint);
      const data: string[] = await response.json();
      const options = data.map((option) => ({ value: option, label: option }));
      setOptions(options);
      return options;
    }
    return (await filterOptions(inputValue, options)).map(
      (option) => option.obj
    );
  };

  const handleChange = (value: Option[]) => {
    setValue(value);
  };

  // https://stackoverflow.com/questions/55264659/how-do-i-figure-out-which-react-select-style-keys-map-to-which-components
  const style: StylesConfig = {
    control: (base) => ({
      ...base,
      ...styles,
    })
  };

  return (
    <div>
      <label
        htmlFor={`react-select-${id}-input`}
        className="block mb-2 dark:text-white"
      >
        {label}
      </label>
      <AsyncCreatableSelect
        id={id}
        instanceId={id}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        value={value}
        // @ts-ignore
        onChange={handleChange}
        className="dark:text-white"
        styles={style}
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
