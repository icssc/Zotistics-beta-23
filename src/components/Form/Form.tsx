import { useContext } from "react";
import SelectDropdown from "./SelectDropdown";
import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";

import { QueriesContext } from "src/contexts/queries/queries";

const Form = () => {
  const { queries, updateQuery, selectedQuery } = useContext(QueriesContext);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SelectDropdown
        id="instructors"
        label="Instructor"
        endpoint={"/api/instructors"}
        value={queries.get(selectedQuery)?.instructors ?? []}
        setValue={(value) => updateQuery(selectedQuery, "instructors", value)}
        formType={AsyncSelect}
      />
      <SelectDropdown
        id="quarters"
        label="Quarter"
        endpoint={"/api/quarters"}
        value={queries.get(selectedQuery)?.quarters ?? []}
        setValue={(value) => updateQuery(selectedQuery, "quarters", value)}
        formType={AsyncSelect}
      />
      <SelectDropdown
        id="years"
        label="Year"
        endpoint={"/api/years"}
        value={queries.get(selectedQuery)?.years ?? []}
        setValue={(value) => updateQuery(selectedQuery, "years", value)}
        formType={AsyncSelect}
      />
      <SelectDropdown
        id="departments"
        label="Department"
        endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.departments ?? []}
        setValue={(value) => updateQuery(selectedQuery, "departments", value)}
        formType={AsyncSelect}
      />
      <SelectDropdown
        id="course-code"
        label="Course Code"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.courseCode ?? []}
        setValue={(value) => updateQuery(selectedQuery, "courseCode", value)}
        formType={AsyncCreatableSelect}
      />
      <SelectDropdown
        id="class-code"
        label="Class Code"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.classCode ?? []}
        setValue={(value) => updateQuery(selectedQuery, "classCode", value)}
        formType={AsyncCreatableSelect}
      />
    </div>
  );
};

export default Form;
