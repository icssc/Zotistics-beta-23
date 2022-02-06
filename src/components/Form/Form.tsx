import { useContext } from "react";
import MultiSelectDropdown from "src/components/MultiSelectDropdown/MultiSelectDropdown";
import CreatableMultiSelectDropdown from "src/components/CreatableMultiSelectDropdown/CreatableMultiSelectDropdown";

import { QueriesContext } from "src/contexts/queries/queries";

const style = {
    control: base => ({
        ...base,
        border: 0,
    })
};

const Form = () => {
  const { queries, updateQuery, selectedQuery } = useContext(QueriesContext);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <MultiSelectDropdown
        id="instructors"
        label="Instructor"
        endpoint={"/api/instructors"}
        value={queries.get(selectedQuery)?.instructors ?? []}
        setValue={(value) => updateQuery(selectedQuery, "instructors", value)}
      />
      <MultiSelectDropdown
        id="quarters"
        label="Quarter"
        endpoint={"/api/quarters"}
        value={queries.get(selectedQuery)?.quarters ?? []}
        setValue={(value) => updateQuery(selectedQuery, "quarters", value)}
      />
      <MultiSelectDropdown
        id="years"
        label="Year"
        endpoint={"/api/years"}
        value={queries.get(selectedQuery)?.years ?? []}
        setValue={(value) => updateQuery(selectedQuery, "years", value)}
      />
      <MultiSelectDropdown
        id="departments"
        label="Department"
        endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.departments ?? []}
        setValue={(value) => updateQuery(selectedQuery, "departments", value)}
      />
      <CreatableMultiSelectDropdown
        id="course-code"
        label="Course Code"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.courseCode ?? []}
        setValue={(value) => updateQuery(selectedQuery, "courseCode", value)}
      />
      <CreatableMultiSelectDropdown
        id="class-code"
        label="Class Code"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.classCode ?? []}
        setValue={(value) => updateQuery(selectedQuery, "classCode", value)}
      />
    </div>
  );
};

export default Form;
