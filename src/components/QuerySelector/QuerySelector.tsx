import { useContext } from "react";

import Sync from "~icons/ion/sync-outline.jsx";
import Close from "~icons/ion/close-outline.jsx";

import { QueriesContext } from "src/contexts/queries/queries";

interface QueryProps {
  name: string;
  queryId: any;
}

const Query = ({ name, queryId }: QueryProps) => {
  const { states, removeQuery, selectedQuery, setSelectedQuery } =
    useContext(QueriesContext);

  return (
    <div
      className={
        "grid grid-flow-col gap-1 items-center py-1 pr-1 pl-2 text-sm rounded-full border dark:text-white border-neutral-400 " +
        (selectedQuery === queryId ? "bg-neutral-200 dark:bg-neutral-800" : "")
      }
    >
      {states.get(queryId)?.loading && (
        <span className="animate-spin">
          <Sync />
        </span>
      )}
      <button
        onClick={() => {
          setSelectedQuery(queryId);
        }}
      >
        {name}
      </button>
      <button
        onClick={() => {
          removeQuery(queryId);
        }}
      >
        <span className="text-base">
          <Close />
        </span>
      </button>
    </div>
  );
};

export default Query;
