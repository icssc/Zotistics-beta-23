import { useState } from "react";

import MultiSelectDropdown from "src/components/MultiSelectDropdown/MultiSelectDropdown";

interface Option {
  value: string;
  label: string;
}

const Form = () => {
  const [instructorsValue, setInstructorsValue] = useState<Option>();
  const [quartersValue, setQuartersValue] = useState<Option>();
  const [yearsValue, setYearsValue] = useState<Option>();
  const [departmentsValue, setDepartmentsValue] = useState<Option>();

  return (
    <>
      <MultiSelectDropdown
        endpoint={"/api/instructors"}
        value={instructorsValue}
        setValue={setInstructorsValue}
        id="instructors"
      />
      <MultiSelectDropdown
        endpoint={"/api/quarters"}
        value={quartersValue}
        setValue={setQuartersValue}
        id="quarters"
      />
      <MultiSelectDropdown
        endpoint={"/api/years"}
        value={yearsValue}
        setValue={setYearsValue}
        id="years"
      />
      <MultiSelectDropdown
        endpoint={"/api/departments"}
        value={departmentsValue}
        setValue={setDepartmentsValue}
        id="departments"
      />
    </>
  );
};

export default Form;
