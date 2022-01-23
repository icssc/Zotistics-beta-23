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
  const [courseCodeValue, setCourseCodeValue] = useState<string | undefined>();
  const [classCodeValue, setClassCodeValue] = useState<string | undefined>();

  return (
    <main className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 content">
      <MultiSelectDropdown
        id="instructors"
        label="Instructor"
        endpoint={"/api/instructors"}
        value={instructorsValue}
        setValue={setInstructorsValue}
      />
      <MultiSelectDropdown
        id="quarters"
        label="Quarter"
        endpoint={"/api/quarters"}
        value={quartersValue}
        setValue={setQuartersValue}
      />
      <MultiSelectDropdown
        id="years"
        label="Year"
        endpoint={"/api/years"}
        value={yearsValue}
        setValue={setYearsValue}
      />
      <MultiSelectDropdown
        id="departments"
        label="Department"
        endpoint={"/api/departments"}
        value={departmentsValue}
        setValue={setDepartmentsValue}
      />
      <div>
        <label htmlFor="course-code" className="block mb-2 dark:text-white">
          Course Code
        </label>
        <input
          id="course-code"
          className="h-9 input"
          value={courseCodeValue}
          onChange={(event) => {
            setCourseCodeValue(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="class-code" className="block mb-2 dark:text-white">
          Class Code
        </label>
        <input
          id="class-code"
          className="h-9 input"
          value={classCodeValue}
          onChange={(event) => {
            setClassCodeValue(event.target.value);
          }}
        />
      </div>
    </main>
  );
};

export default Form;
