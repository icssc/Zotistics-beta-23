import { useContext } from "react";
import QuerySelector from "src/components/QuerySelector/QuerySelector";

import Add from "~icons/ion/add-circle-outline.jsx";

import { QueriesContext } from "src/contexts/queries/queries";

const QuerySelectorList = () => {
  const { queries, addQuery } = useContext(QueriesContext);
  const MAX_QUERIES = 5;

  return (
    <menu className="grid grid-flow-col auto-cols-max gap-2 items-center mt-5">
      {Array.from(queries.entries()).map(([key]) => (
        <QuerySelector key={key} name="Search Query" queryId={key} />
      ))}
      {queries.size < MAX_QUERIES && <button className="text-[24px] dark:text-white" onClick={addQuery}>
        <Add />
      </button>}
    </menu>
  );
};

export default QuerySelectorList;
