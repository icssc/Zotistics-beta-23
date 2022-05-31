import { useContext } from "react";
import { querySelectorText } from "../../utils/clean";
import QuerySelector from "src/components/QuerySelector/QuerySelector";

import { PlusCircle } from "react-feather";

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
  const MAX_QUERIES = 4;

  return (
    <menu className="flex flex-row gap-2 items-center mt-3">
      {Array.from(queries.entries()).map(([key], index) => (
        <QuerySelector
          key={key}
          name={querySelectorText(queries.get(key))}
          queryId={key}
          color={queries.size > 1 ? chartColorsMultiple[index] : null}
        />
      ))}
      {queries.size < MAX_QUERIES && (
        <button className="dark:text-white" onClick={addQuery}>
          <PlusCircle size={24} strokeWidth={1.5} />
        </button>
      )}
    </menu>
  );
};

export default QuerySelectorList;
