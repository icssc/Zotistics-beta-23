import { useContext, useState } from "react";
import { ColorSchemeContext } from "src/contexts/colorSchemeToggle/colorSchemeContext";
import { StylesConfig } from "react-select";
import { Option } from "src/types/index";
import { styleDark, styleLight } from "./styling";
import { FormSelectType } from "./constants";
import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";
import fuzzysort from "fuzzysort";

interface SelectDropdownProps {
  id: string;
  label: string;
  endpoint?: string;
  value: Option[];
  setValue: (value: Option[]) => void;
  formType: FormSelectType;
}

const SelectDropdown = ({
  id,
  label,
  endpoint,
  value,
  setValue,
  formType,
}: SelectDropdownProps) => {
  const [options, setOptions] = useState<Option[]>([]);
  const { colorScheme } = useContext(ColorSchemeContext);

  const filterOptions = (inputValue: string, options: (Option | undefined)[]) =>
    fuzzysort.goAsync(inputValue, options, { key: "value" });

  const loadOptions = async (inputValue: string) => {
    // Fetch results from serverless function
    if (endpoint && !options.length) {
      const response = await fetch(endpoint);
      const data: string[] = await response.json();
      const options = data.map((option) => ({ value: option, label: option }));
      setOptions(options);
      return options.slice(0, 50);
    }
    // Fuzzy search on client
    return (await filterOptions(inputValue, options))
      .map((option) => option.obj)
      .slice(0, 50);
  };

  const handleChange = (value: Option[]) => {
    setValue(value);
  };

  // SelectTag needs to be capitalized so JSX can render it
  const SelectTag =
    formType === FormSelectType.NORMAL ? AsyncSelect : AsyncCreatableSelect;

  return (
    <div>
      <label
        htmlFor={`react-select-${id}-input`}
        className="block mb-2 dark:text-white"
      >
        {label}
      </label>
      <SelectTag
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
        styles={colorScheme === "dark" ? styleDark : styleLight}
      />
    </div>
  );
};

export default SelectDropdown;
