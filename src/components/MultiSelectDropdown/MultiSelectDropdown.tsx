import { Dispatch, useState } from "react";
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

interface MultiSelectDropdownProps {
  id: string;
  endpoint: string;
  value?: Option;
  setValue: Dispatch<any>;
}

const MultiSelectDropdown = ({
  id,
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

  return (
    <AsyncSelect
      id={id}
      instanceId={id}
      isClearable
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={handleChange}
      value={value}
    />
  );
};

export default MultiSelectDropdown;
