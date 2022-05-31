import { useContext, useEffect, useState } from "react";
import { Loader, X, Info } from "react-feather";
import { QueriesContext } from "src/contexts/queries/queries";
import Modal from "../DetailsTable/Modal";

interface QueryProps {
  name: string;
  queryId: any;
  color: string | null;
}

const Query = ({ name, queryId, color }: QueryProps) => {
  const { states, removeQuery, selectedQuery, setSelectedQuery } =
    useContext(QueriesContext);
    let [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <div className="grid min-w-[20%]">
      <div
        className={`flex flex-row justify-between gap-1 items-center cursor-pointer py-1.5 pr-1 pl-2 text-sm rounded-lg dark:text-slate-100 bg-[#f2f2f2] hover:bg-[#e7e7e7] dark:bg-[#171717] dark:hover:bg-[#363636]
        ${selectedQuery === queryId && "bg-[#d7d7d7] dark:bg-[#303030]"}`}
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
        <div className="flex items-center rounded-md divide-x-2 divide-neutral-400 dark:divide-neutral-600 border-2 border-neutral-400 dark:border-neutral-600">
          <button
            onClick={(e) => {
              setIsModalOpen(true)
              // Prevent click event from bubbling to parent div. This is sort of a hacky solution, but it should work until we redesign the tabs.
              e.stopPropagation();
              removeQuery(queryId);
            }}
            className="px-[3px] py-[3px] hover:text-neutral-600 dark:hover:text-black"
          >
              <Info size={18} strokeWidth={1.5} />
          </button>
          <button
                onClick={() => {
                    removeQuery(queryId);
                }}
                className="px-[3px] py-[3px] hover:text-red-600"
          >
            <span className="text-base">
              <X size={18} strokeWidth={1.5} />
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
      {isModalOpen &&
          <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} queryID={selectedQuery} />
      }
    </>
  );
};

export default Query;
