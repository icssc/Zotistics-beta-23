import { useContext } from "react";
import { Loader, X } from "react-feather";
import { QueriesContext } from "src/contexts/queries/queries";

interface QueryProps {
  name: string;
  queryId: any;
  color: string | null;
}

const Query = ({ name, queryId, color }: QueryProps) => {
  const { states, removeQuery, selectedQuery, setSelectedQuery } =
    useContext(QueriesContext);

  return (
    <div className="grid min-w-[20%]">
      <div
        className={`flex flex-row justify-between gap-1 items-center cursor-pointer py-2 pr-1 pl-2 text-sm rounded-lg dark:text-slate-100 bg-[#f2f2f2] hover:bg-[#e7e7e7] dark:bg-[#171717] dark:hover:bg-[#363636]
        ${selectedQuery === queryId && "bg-[#d4d4d4] dark:bg-[#303030]"}`}
        onClick={() => {
          setSelectedQuery(queryId);
        }}
      >
        {states.get(queryId)?.loading && (
          <span className="animate-spin">
            <Loader size={16} strokeWidth={1.5} />
          </span>
        )}
        <div className="flex justify-center w-full">
          <span>{name}</span>
        </div>
        <div className="flex">
          <button
            onClick={(e) => {
              // Prevent click event from bubbling to parent div. This is sort of a hacky solution, but it should work until we redesign the tabs.
              e.stopPropagation();
              removeQuery(queryId);
            }}
          >
            <span className="text-base">
              <X size={16} strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
      {color && (
        <span
          className={`h-[2px] w-[97%] rounded-[99px] mt-1 mx-auto mb-0 ${
            selectedQuery === queryId && "h-[4px]"
          }`}
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
};

export default Query;
