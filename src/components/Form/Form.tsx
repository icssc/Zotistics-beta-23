import { useContext } from "react";
import { FormSelectType } from "./constants";
import { QueriesContext } from "src/contexts/queries/queries";
import SelectDropdown from "./SelectDropdown";

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
        formType={FormSelectType.NORMAL}
      />
      <SelectDropdown
        id="quarters"
        label="Quarter"
        endpoint={"/api/quarters"}
        value={queries.get(selectedQuery)?.quarters ?? []}
        setValue={(value) => updateQuery(selectedQuery, "quarters", value)}
        formType={FormSelectType.NORMAL}
      />
      <SelectDropdown
        id="years"
        label="Year"
        endpoint={"/api/years"}
        value={queries.get(selectedQuery)?.years ?? []}
        setValue={(value) => updateQuery(selectedQuery, "years", value)}
        formType={FormSelectType.NORMAL}
      />
      <SelectDropdown
        id="departments"
        label="Department"
        endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.departments ?? []}
        setValue={(value) => updateQuery(selectedQuery, "departments", value)}
        formType={FormSelectType.NORMAL}
      />
      <SelectDropdown
        id="course-number"
        label="Course Number"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.courseNumber ?? []}
        setValue={(value) => updateQuery(selectedQuery, "courseNumber", value)}
        formType={FormSelectType.CREATABLE}
      />
      <SelectDropdown
        id="course-code"
        label="Course Code"
        // endpoint={"/api/departments"}
        value={queries.get(selectedQuery)?.courseCode ?? []}
        setValue={(value) => updateQuery(selectedQuery, "courseCode", value)}
        formType={FormSelectType.CREATABLE}
      />
    </div>
  );
};

export default Form;
