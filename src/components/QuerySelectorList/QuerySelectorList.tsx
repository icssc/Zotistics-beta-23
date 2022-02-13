import { useContext } from "react";
import { querySelectorText } from "../../utils/clean";
import QuerySelector from "src/components/QuerySelector/QuerySelector";

import Add from "~icons/ion/add-circle-outline.jsx";

import { QueriesContext } from "src/contexts/queries/queries";

const chartColorsMultiple = [
  "#22577A",
  "#38A3A5",
  "#57CC99",
  "#80ED99",
  "#C7F9CC",
];

const QuerySelectorList = () => {
  const { queries, addQuery } = useContext(QueriesContext);
  const MAX_QUERIES = 5;

  return (
    <menu className="grid grid-flow-col auto-cols-max gap-2 items-center mt-3">
      {Array.from(queries.entries()).map(([key], index) => (
        // @ts-ignore
        <QuerySelector
          key={key}
          name={querySelectorText(queries.get(key))}
          queryId={key}
          color={queries.size > 1 ? chartColorsMultiple[index] : null}
        />
      ))}
      {queries.size < MAX_QUERIES && (
        <button className="text-[24px] dark:text-white" onClick={addQuery}>
          <Add />
        </button>
      )}
    </menu>
  );
};

export default QuerySelectorList;
